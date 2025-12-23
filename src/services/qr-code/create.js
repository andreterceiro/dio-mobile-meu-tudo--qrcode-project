import prompt from 'prompt';
import promptQRCode from '../../prompts-schema/prompt-qrcode.js';
import handler from './handler.js';

async function createQRCode() {
    prompt.get(promptQRCode, handler);

    prompt.start();
}

export default createQRCode;