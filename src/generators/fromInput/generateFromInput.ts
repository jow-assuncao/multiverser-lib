import { generateRandomNumber } from '../numbers'
import { generateStringFromType } from '../strings'

/**
 * @param value can be a string, number, boolean, array or object.
 * @returns a copy of the value passed as param but with random values.
 */
export function generateFromInput(value?: any) {
    let newValue: typeof value = null

    if (!value) return value

    switch (typeof value) {
        case 'string':
            newValue = generateStringFromType(value)
            break

        case 'number':
            newValue = generateRandomNumber(value)
            break

        case 'object': {
            const isArray = Array.isArray(value)

            if (isArray) {
                newValue = value.map((v: any) => generateFromInput(v))
            } else {
                const newObject: any = {}

                Object.keys(value).map((valueKey: string) => {
                    newObject[valueKey] = generateFromInput(value[valueKey])
                })

                newValue = newObject
            }
            break
        }
        case 'boolean':
            newValue = Boolean(Math.round(Math.random()))
            break

        default:
            newValue = value
            break
    }

    return newValue
}
