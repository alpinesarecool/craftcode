const ROMAN_5 = "V"
const ROMAN_1 = "I"
export function numericalToRoman(input: number) {

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
