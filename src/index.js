import prompt from 'prompt';
import mainPrompt from './prompts/prompt-main.js';

async function main() {
    prompt.get(mainPrompt, (err, choice) => {
        if (choice.select == 1) console.log("Escolheu o QRCode");
        if (choice.select == 2) console.log("Escolheu o password");
    });
    prompt.start();
}

main();


// Current video: QR-code architecture