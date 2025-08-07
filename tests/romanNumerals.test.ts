import { describe, expect, it } from "vitest";
import { romanNumerals } from "../src/romanNumerals";

describe("romanNumerals", () => {
  it("should return empty string when the input is 0", () => {
    expect(romanNumerals(0)).toBe("")
  })

  it("return I when the number is 1", () => {
    expect(romanNumerals(1)).toBe("I")
  })

  it("returns II when the number is 2", () => {
    expect(romanNumerals(2)).toBe("II")
  })
  it("returns V when the number is 5", () => {
    expect(romanNumerals(5)).toBe("V")
  })
  it("returns x when the number is 10", () => {
    expect(romanNumerals(10)).toBe("X")
  })
  it("returns L when the number is 50", () => {
    expect(romanNumerals(50)).toBe("L")
  })
  it("returns C when the number is 100", () => {
    expect(romanNumerals(100)).toBe("C")
  })
  it("returns D when the number is 500", () => {
    expect(romanNumerals(500)).toBe("D")
  })
  it("returns M when the number is 1000", () => {
    expect(romanNumerals(1000)).toBe("M")
  })
  it("returns III when the number is 3", () => {
    expect(romanNumerals(3)).toBe("III")
  })
  it("returns iV when the number is 4", () => {
    expect(romanNumerals(4)).toBe("IV")
  })
  it("returns VI when the number is 6", () => {
    expect(romanNumerals(6)).toBe("VI")
  })
  it("returns IX when the number is 9", () => {
    expect(romanNumerals(9)).toBe("IX")
  })
  it("returns XIII when the number is 13", () => {
    expect(romanNumerals(13)).toBe("XIII")
  })
  it("returns XIV when the number is 14", () => {
    expect(romanNumerals(14)).toBe("XIV")
  })
  it("returns XIX when the number is 19", () => {
    expect(romanNumerals(19)).toBe("XIX")
  })
  it("returns XXII when the number is 22", () => {
    expect(romanNumerals(22)).toBe("XXII")
  })
  it("returns XXVII when the number is 27", () => {
    expect(romanNumerals(27)).toBe("XXVII")
  })
  it("returns XXIX when the number is 39", () => {
    expect(romanNumerals(39)).toBe("XXXIX")
  })
  it("returns XL when the number is 40", () => {
    expect(romanNumerals(40)).toBe("XL")
  })
  it("returns XLI when the number is 41", () => {
    expect(romanNumerals(41)).toBe("XLI")
  })
  it("returns XLIX when the number is 49", () => {
    expect(romanNumerals(49)).toBe("XLIX")
  })
  it("returns LI when the number is 51", () => {
    expect(romanNumerals(51)).toBe("LI")
  })
  it("returns LXXVII when the number is 77", () => {
    expect(romanNumerals(77)).toBe("LXXVII")
  })
  it("returns XCI when the number is 91", () => {
    expect(romanNumerals(91)).toBe("XCI")
  })
  it("returns CI when the number is 101", () => {
    expect(romanNumerals(101)).toBe("CI")
  })
  it("returns CCCXCIX when the number is 399", () => {
    expect(romanNumerals(399)).toBe("CCCXCIX")
  })
  it("returns CDII when the number is 402", () => {
    expect(romanNumerals(402)).toBe("CDII")
  })
  it("returns CDXCIX when the number is 499", () => {
    expect(romanNumerals(499)).toBe("CDXCIX")
  })
  it("returns DI when the number is 501", () => {
    expect(romanNumerals(501)).toBe("DI")
  })
  it("returns DCCLXXXVII when the number is 787", () => {
    expect(romanNumerals(787)).toBe("DCCLXXXVII")
  })
  it("returns CMI when the number is 901", () => {
    expect(romanNumerals(901)).toBe("CMI")
  })
  it("returns CMXCIX when the number is 999", () => {
    expect(romanNumerals(999)).toBe("CMXCIX")
  })
  it("returns MI when the number is 1001", () => {
    expect(romanNumerals(1001)).toBe("MI")
  })
  it("returns MMMCMXCIX when the number is 3999", () => {
    expect(romanNumerals(3999)).toBe("MMMCMXCIX")
  })
  it("returns XXV when the number is 25", () => {
    expect(romanNumerals(25)).toBe("XXV")
  })
  it("throws an exception when the number is greater than 3999", () => {
    expect(() => romanNumerals(4000)).toThrow(RangeError)
    expect(() => romanNumerals(4000)).toThrow("Input must be 3999 or less")
  })
})