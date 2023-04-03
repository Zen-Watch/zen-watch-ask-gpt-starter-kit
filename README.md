# Zen.Watch Ask GPT Starter Kit
Zen.Watch's configurable AI code generator by OpenAI's Chat GPT for your terminal 

Fork and extend this starter kit to:
- Set any prompt you want
- Pick any openai algorithhm you want
- Generate code for new trigger and actions templates optimized for [Zen.Watch](https://zen.watch)

### Installation
- Replace the default text with your chat-gpt api key (Sign up a openapi.com/chatgpt if you need an account)
- If you don't have an api-key, you can use the hosted version at https://zen.watch (sign up for an account to access the admin console)

``` npm install ```
Installs the dependencies for the the app with node command.

``` npm run ask-gpt-terminal ```
Starts the app with node command in the interactive chat mode from your terminal

``` npm run ask-gpt-with-prompt-file ```
Starts the app with node command in the non-interactive mode. Good for code generation, with maximum context provided in `prompt.txt`. `Note:` Run this command from the root folder of your repository, as the prompt.txt and config.json are referenced relative to your execution directory.

### Configuration

``` prompt.txt ```
Used in the non-interactive mode, to provide code samples and references for gpt to learn your expected code style

``` config.json ```
Used for both interactive and non-interactive modes, to fine-tune gpt parameters. Want to use a different gpt mode, this is your place to config.



