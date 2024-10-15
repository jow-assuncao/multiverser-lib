import { validateIsSpecialChar } from "../../validators"

export function generateNearChar(char: string) {
    const multiplier = Math.round(Math.random() * 2)

    if (validateIsSpecialChar(char)) return char
    if (char === 'z' || char === '9')
        return String.fromCharCode(
            char.charCodeAt(char.length - 1) - multiplier
        )
    return String.fromCharCode(char.charCodeAt(char.length - 1) + multiplier)
}
