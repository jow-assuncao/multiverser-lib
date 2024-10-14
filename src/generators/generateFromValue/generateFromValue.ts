import { generateRandomNumber } from "../numbers";
import { generateStringFromType } from "../strings";

export function generateFromValue(value: any) {
    let newValue: typeof value = null;

    switch (typeof value) {
        case "string":
            newValue = generateStringFromType(value);
        break;

        case "number":
            newValue = generateRandomNumber(value);
        break;

        case "object":
            const isArray = Array.isArray(value);

            if (isArray) {
                newValue = value.map((v: any) => generateFromValue(v));
            } else {
                let newObject: any = {};

                Object.keys(value).map((valueKey: any) => {
                    newObject[valueKey] = generateFromValue(value[valueKey]);
                });

                newValue = newObject;
            };
        break;

        case "boolean":
            newValue = Boolean(Math.round(Math.random()));
        break;

        default:
            newValue = value;
        break;
    }

    return newValue
}
