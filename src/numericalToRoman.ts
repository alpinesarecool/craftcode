export function numericalToRoman(input: number) {
  if (input === 1) {
    return "I";
  }
  if (input === 2) {
    return "II"
  }
  if(input === 3){
    return "III"
  }
  return ""
}