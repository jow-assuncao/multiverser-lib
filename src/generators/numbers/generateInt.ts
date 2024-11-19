/**
 *   @description generate random integer between min and max interval
 */
export function generateInt(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
