export function numericalToRoman(input: number) {
  if (input > 0) {
    return "I".repeat(input);
  }
  return ""
}