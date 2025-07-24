const ROMAN_1 = "I"
const ROMAN_5 = "V"
const ROMAN_10 = "X"
export function numericalToRoman(input: number) {
  if (input === 10) {
    return ROMAN_10
  }
  if (input === 9) {
    return ROMAN_1 + ROMAN_10
  }
  if (input > 5) {
    return ROMAN_5 + repeatI(input % 5)
  }
  if (input === 5) {
    return ROMAN_5;
  }
  if (input === 4) {
    return ROMAN_1 + ROMAN_5;
  }
  if (input > 0) {
    return repeatI(input);
  }
  return ""
}

function repeatI(input: number) {
  return ROMAN_1.repeat(input);
}
