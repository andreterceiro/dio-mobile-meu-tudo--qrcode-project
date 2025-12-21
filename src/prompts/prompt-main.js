import chalk from 'chalk';

const mainPrompt = [
    {
        name: "select",
        description: chalk.yellow("Escolha a ferramenta (1 - QRCODDE ou 2 - PASSWORD)"),
        pattern: /^[1,2]{1}$/,
        message: "Escolha apenas 1 ou 2",
        required: true
    }
];

export default mainPrompt;