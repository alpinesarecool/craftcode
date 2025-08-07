export function romanNumerals(input: number) {
  if (input === 0) return ""
  if (input === 2) return "II"

  const symbols = [{ value: 1, symbol: "I" },
  { value: 5, symbol: "V" },
  { value: 10, symbol: "X" },
  { value: 50, symbol: "L" },
  { value: 100, symbol: "C" },
  { value: 500, symbol: "D" },
  { value: 1000, symbol: "M" },
  { value: 4, symbol: "IV" },
  { value: 9, symbol: "IX" },
  { value: 40, symbol: "XL" },
  { value: 90, symbol: "XC" },
  { value: 400, symbol: "CD" },
  { value: 900, symbol: "CM" }
  ]
  let result: string = ""
  for (const { value, symbol } of symbols) {
    if (value === input) return symbol
  }

  let temp_input: number = input
  temp_input = input
  if (temp_input < 5) {
    result = "I".repeat(temp_input)
  }

  else if (temp_input > 5) {

    while (true) {
      if (temp_input > 1000) {
        result = result + "M"
        temp_input = temp_input - 1000
      }
      if (temp_input > 900 && temp_input < 1000) {
        result = result + "CM"
        temp_input = temp_input - 900
      }
      if (temp_input > 500 && temp_input < 900) {
        result = result + "D"
        temp_input = temp_input - 500
      }
      if (temp_input > 400 && temp_input < 500) {
        result = result + "CD"
        temp_input = temp_input - 400
      }
      if (temp_input > 100 && temp_input < 400) {
        result = result + "C"
        temp_input = temp_input - 100
      }
      if (temp_input > 90 && temp_input < 100) {
        result = result + "XC"
        temp_input = temp_input - 90
      }
      if (temp_input > 50 && temp_input < 90) {
        result = result + "L"
        temp_input = temp_input - 50
      }
      if (temp_input > 40 && temp_input < 50) {
        result = result + "XL"
        temp_input = temp_input - 40
      }
      if (temp_input > 10 && temp_input < 40) {
        result = result + "X"
        temp_input = temp_input - 10
      }

      if (temp_input > 5 && temp_input < 10) {
        if (temp_input == 9) {
          result = result + "IX"
          break
        }
        result = result + "V"
        temp_input = temp_input - 5
      }
      if (temp_input < 5) {
        if (temp_input == 4) {
          result = result + "IV"
          break
        }
        result = result + "I".repeat(temp_input)
        break
      }
      if (temp_input <= 0) {
        break
      }
    }
  }
  return result
}