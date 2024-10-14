export function validateIsSpecialChar(char: string) {
    const regex = new RegExp(/[^a-zA-Z0-9]/);

    return regex.test(char)
}