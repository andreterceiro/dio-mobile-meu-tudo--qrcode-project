import chalk from 'chalk';

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QRCode")
    },
    {
        name: "type",
        description: chalk.yellow("Escolha o tipo entre 1-normal e 2-terminal"),
        pattern: /^[1,2]{1}$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2")
    }
];

export default promptQRCode;