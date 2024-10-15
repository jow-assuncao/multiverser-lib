import { validateIsEmail, validateIsURL } from '../../validators'
import { generateEmail } from './generateEmail'
import { generateNearChar } from './generateNearChar'
import { generateText } from './generateText'

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
