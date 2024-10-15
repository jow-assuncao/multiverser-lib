export function countDecimalPlaces(number: number): number {
    const numberAsString = String(number)
    const spllitedNumber = numberAsString.split('.')

    if (spllitedNumber.length === 2) return spllitedNumber[1].length

    return 0
}
