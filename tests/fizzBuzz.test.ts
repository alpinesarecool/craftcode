import { describe, it, expect } from 'vitest'
import { fizzBuzz } from '../src/fizzBuzz'

describe("fizzBuzz", () => {
  it("should return 1 for input 1", () => {
    expect(fizzBuzz(1)).toBe("1")
  })

  it("Should return fizz when the input is 3", () => {
    expect(fizzBuzz(3)).toBe("fizz")
  })

  it("Should return buzz when the input is 5", () => {
    expect(fizzBuzz(5)).toBe("buzz")
  })

  it("Should return fizz when the input is divisible by 3", () => {
    expect(fizzBuzz(6)).toBe("fizz")
  })

  it("Should return buzz when the input is divisible by 5", () => {
    expect(fizzBuzz(10)).toBe("buzz")
  })

  it("Should return fizzbuzz when the input is divisible by both 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("fizzbuzz")
  })

})