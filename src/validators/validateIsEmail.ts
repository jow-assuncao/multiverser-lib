export function validateIsEmail(string: string): boolean {
    const regex = new RegExp(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm);

    return regex.test(string);
}