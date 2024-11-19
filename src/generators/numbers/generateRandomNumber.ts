import { countDecimalPlaces } from '../../utils/countDecimalPlaces'

/**
 * @description generate random number based on number passed as param
 * @param number number used as reference in generation (default value is set to 10)
 */
export function generateRandomNumber(number: number = 10) {
    return Number((Math.random() * number).toFixed(countDecimalPlaces(number)))
}
