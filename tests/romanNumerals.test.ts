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
    it("returns XXII when the number is 22", () => {
    expect(romanNumerals(22)).toBe("XXII")
  })
      it("returns XXVII when the number is 27", () => {
    expect(romanNumerals(27)).toBe("XXVII")
  })
})