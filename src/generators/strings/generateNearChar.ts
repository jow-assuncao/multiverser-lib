import { validateIsSpecialChar } from '../../validators'

/**
 * @param char char used as reference to get a near char in Unicode table.
 * @returns the character that is immediately adjacent to the input character in the Unicode table.
 */
export function generateNearChar(char: string) {
    const multiplier = Math.round(Math.random() * 2)

    if (validateIsSpecialChar(char)) return char
    if (char === 'z' || char === '9')
        return String.fromCharCode(
            char.charCodeAt(char.length - 1) - multiplier
        )
    return String.fromCharCode(char.charCodeAt(char.length - 1) + multiplier)
}
