export function numericalToRoman(input: number) {
  if (input === 6) {
    return "VI"
  }
  if (input === 5) {
    return "V";
  }
  if (input === 4) {
    return "IV";
  }
  if (input > 0) {
    return "I".repeat(input);
  }
  return ""
}