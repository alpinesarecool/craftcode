import { describe, it, expect } from 'vitest'
import { numericalToRoman } from '../src/numericalToRoman'

describe("numericalToRoman", () => {
  it("should return empty string for 0", () => {
    expect(numericalToRoman(0)).toBe("")
  })

  it("should return I for 1", () => {
    expect(numericalToRoman(1)).toBe("I")
  })

  it("should return II for 2", () => {
    expect(numericalToRoman(2)).toBe("II")
  })

  it("should return III for 3", () => {
    expect(numericalToRoman(3)).toBe("III")
  })

  it("should return IV for 4", () => {
    expect(numericalToRoman(4)).toBe("IV");
  })

  it("should return V for 5", () => {
    expect(numericalToRoman(5)).toBe("V");
  })

  it("should return VI for 6", () => {
    expect(numericalToRoman(6)).toBe("VI");
  })

  it("should return VII for 7", () => {
    expect(numericalToRoman(7)).toBe("VII");
  })

  it("should return VIII for 8", () => {
    expect(numericalToRoman(8)).toBe("VIII");
  })
})