import { validateIsEmail, validateIsURL } from '../../validators'
import { generateEmail } from './generateEmail'
import { generateNearChar } from './generateNearChar'
import { generateText } from './generateText'

/**
 * @param string string used as reference to generation.
 * @returns generate string based on string param type. Uses validation methods to define if string is an email, url or a normal text.
 * if string is URL the value that will be returned is the same URL.
 */
export function generateStringFromType(string: string): string {
    if (validateIsEmail(string)) return generateEmail()

    if (validateIsURL(string)) return string

    if (string.split(' ').length >= 2) {
        return generateText(string.split(' ').length)
    }

    let newString = ''
    string.split('').forEach((char) => {
        newString += generateNearChar(char)
    })

    return newString
}
