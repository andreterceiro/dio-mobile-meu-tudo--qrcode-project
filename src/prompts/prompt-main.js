const mainPrompt = [
    {
        name: "select",
        description: "Escolha a ferramenta (1 - QRCODDE ou 2 - PASSWORD)",
        pattern: /^[1-2]+$/,
        message: "Escolha apenas 1 ou 2",
        required: true
    }
];

export default mainPrompt;