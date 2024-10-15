import { countDecimalPlaces } from '../../../utils/countDecimalPlaces'

export function generateRandomNumber(number: number) {
    return Number((Math.random() * number).toFixed(countDecimalPlaces(number)))
}
