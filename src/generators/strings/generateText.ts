import loremIpsum from '../../constants/loremIpsum'

/**
 * @param wordCount used as reference to set amount of words that will be generated (default value is set to 3)
 * @returns string with the same amount of words as wordCount param
 */
export function generateText(wordCount: number = 3): string {
    const result = []
    for (let i = 0; i < wordCount; i++) {
        const randomIndex = Math.floor(Math.random() * loremIpsum.length)
        result.push(loremIpsum[randomIndex])
    }

    return result.join(' ')
}
