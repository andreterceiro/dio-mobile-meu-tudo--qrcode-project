import chalk from 'chalk';

const mainPrompt = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramenta (1 - QRCODDE ou 2 - PASSWORD)"),
        pattern: /^[1,2]{1}$/,
        message: chalk.red.italic("Escolha apenas 1 ou 2"),
        required: true
    }
];

export default mainPrompt;