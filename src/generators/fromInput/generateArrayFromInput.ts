import { generateFromInput } from '.'

/**
 * @param model model used as reference to generate random values.
 * @param qty amount of copys to be generated.
 * @returns return an array of model passed as param but with random values.
 */
export function generateArrayFromInput(model: any, qty: number) {
    const arr: Array<typeof model> = []
    for (let i = 0; i < qty; i++) {
        arr.push(generateFromInput(model))
    }

    return arr
}
