export function numericalToRoman(input: number) {
    if (input === 4) {
        return "IV";
    }
    if (input > 0) {
        return "I".repeat(input);
    }
    return ""
}