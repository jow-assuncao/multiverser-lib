import { generateText } from "./generateText";

export function generateEmail(): string {
    return `${generateText(1)}@${generateText(1)}.com`
}
