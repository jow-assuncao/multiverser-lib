import { generateFromInput } from '.'

export function generateArrayFromInput(model: any, qty: number) {
    const arr: Array<typeof model> = []
    for (let i = 0; i < qty; i++) {
        arr.push(generateFromInput(model))
    }

    return arr
}
