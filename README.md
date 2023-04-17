# Zen.Watch Ask GPT Starter Kit
Zen.Watch's configurable ChatGPT code generator for your terminal. 

This terminal has 2 modes: an interactive chat mode and a non-interactive text file based prompt mode and you can easily toggle between the 2 modes.

- Interactive chat mode is a replica of chat-gpt interface in your terminal
- Non-interactive text file based prompt mode allows to set maximum context for code generation using code samples & descriptions

### Demo
[![Alt text](https://img.youtube.com/vi/2uxgVPVXDj4/maxresdefault.jpg)](https://www.youtube.com/embed/2uxgVPVXDj4)

### API Keys
For using this version, you need to sign up (paid version) and get your api key from https://platform.openai.com/overview 
- If you need a free, hosted version of this repository, use the one at https://zen.watch
- You need to sign up (free of charge) to access the admin console hosted at https://admin.zen.watch

Fork and extend this starter kit to:
- Set any prompt you want
- Pick any openai algorithhm you want
- Generate code for new trigger and actions templates optimized for [Zen.Watch](https://zen.watch)

### Installation

``` Create a config.json in the root folder ```
Create the file with the following content.  
```
{
    "api_key": "your-api-key",
    "model": "gpt-3.5-turbo",
    "temperature": 0.7,
    "stream": true
}
```
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



