async function getPermittedCharacters() {
    let characters = [];

    if (process.env.UPPERCASE_LETTERS === "true") {
        characters.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    if (process.env.LOWERCASE_LETTERS === "true") {
        characters.push(... "abcdefghijklmnopqrstuvwxyz");
    }

    if (process.env.NUMBERS === "true") {
        characters.push(... "0123456789");
    }

    if (process.env.NUMBERS === "true") {
        characters.push(... "0123456789");
    }

    if (process.env.SPECIAL_CHARACTERS === "true") {
        characters.push(... "!@#$%^&*()-_");
    }

    return characters;
}

export {getPermittedCharacters};