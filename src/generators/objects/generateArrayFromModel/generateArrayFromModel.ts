import { generateFromValue } from "../../generateFromValue";

export function generateArrayFromModel(model: any, qty: number) {
    const arr: Array<typeof model> = []
    for (let i = 0; i < qty; i++) {
        arr.push(generateFromValue(model))
    }

    return arr;
}
