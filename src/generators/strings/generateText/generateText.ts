import mussumIpsumWords from "../../../constants/mussumIpsum";

export function generateText(wordCount: number = 3): string {
    const result = [];
    for (let i = 0; i < wordCount; i++) {
        const randomIndex = Math.floor(Math.random() * mussumIpsumWords.length);
        result.push(mussumIpsumWords[randomIndex]);
    }

    return result.join(' ');
}
