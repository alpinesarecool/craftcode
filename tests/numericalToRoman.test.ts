import { describe, it, expect } from 'vitest'
import { numericalToRoman } from '../src/numericalToRoman'

describe("numericalToRoman",()=>{
  it("should return empty string for 0",()=>{
    expect(numericalToRoman(0)).toBe("")
  })

  it("should return I for 1", () => {
    expect(numericalToRoman(1)).toBe("I")
  })
})