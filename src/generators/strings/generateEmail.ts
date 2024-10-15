import { generateText } from './generateText'

/**
 * @returns random email address
 */
export function generateEmail(): string {
    return `${generateText(1)}@${generateText(1)}.com`
}
