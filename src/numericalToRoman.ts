export function numericalToRoman(input: number) {
  if (input>5){
    return "V"+ "I".repeat(input%5)
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