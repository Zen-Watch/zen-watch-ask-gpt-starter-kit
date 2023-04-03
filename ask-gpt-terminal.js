import { config } from "dotenv";
config();
import readline from "readline";
import { Configuration, OpenAIApi } from "openai";
import fs from "fs";

// Read configuration from JSON file
const configuration = JSON.parse(fs.readFileSync("./config.json", "utf-8"));

const openai = new OpenAIApi(new Configuration({
    apiKey: configuration.api_key,
}));

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// ASCII Art header
console.log(`
  ╔═════════════════════════════════════════╗
-----  🚀 zen.watch ask gpt terminal 1.0  ----- 
  ╚═════════════════════════════════════════╝
`);

// Starting prompt
userInterface.prompt();

if (process.argv.length === 3 && process.argv[2] === "file") {
    // Read prompt from a text file
    console.log(process.cwd());
    const prompt = fs.readFileSync("./prompt.txt", "utf-8").trim();
    ask_gpt(prompt).then(() => {
        //process.exit(0);
    }).finally(() => {
        userInterface.close();
    });
} else {
    // Chat mode
    userInterface.on("line", async (input) => {
        ask_gpt(input)
            .then(() => {
                userInterface.prompt();
            })
            .catch((error) => {
                console.error(error);
                userInterface.prompt();
            });
    });
}

// Ask GPT function to chat with GPT-3
async function ask_gpt(input) {
    let output = "";

    try {
        const res = await openai.createChatCompletion(
            {
                model: configuration.model,
                messages: [{ role: "user", content: input }],
                temperature: configuration.temperature,
                stream: configuration.stream,
            },
            { responseType: "stream" }
        );

        res.data.on("data", (data) => {
            const lines = data
                .toString()
                .split("\n")
                .filter((line) => line.trim() !== "");
            for (const line of lines) {
                const message = line.replace(/^data: /, "");
                if (message === "[DONE]") {
                    console.log("\n>");
                    return; // Stream finished
                }
                try {
                    const parsed = JSON.parse(message);
                    if (parsed.choices[0].delta.content) {
                        output += parsed.choices[0].delta.content;
                        process.stdout.write(parsed.choices[0].delta.content);
                    }
                } catch (error) {
                    console.error(
                        "Could not JSON parse stream message",
                        message,
                        error
                    );
                }
            }
        });
    } catch (error) {
        if (error.response?.status) {
            console.error(error.response.status, error.message);
            error.response.data.on("data", (data) => {
                const message = data.toString();
                try {
                    const parsed = JSON.parse(message);
                    console.error("An error occurred during OpenAI request: ", parsed);
                } catch (error) {
                    console.error("An error occurred during OpenAI request: ", message);
                }
            });
        } else {
            console.error("An error occurred during OpenAI request", error);
        }
    }
}
