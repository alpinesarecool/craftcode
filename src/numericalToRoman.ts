export function numericalToRoman(input: number) {
  if (input>5){
    return "V"+ repeatI(input%5)
  }
  if (input === 5) {
    return "V";
  }
  if (input === 4) {
    return "IV";
  }
  if (input > 0) {
    return repeatI(input);
  }
  return ""
}

function repeatI(input: number) {
  return "I".repeat(input);
}
