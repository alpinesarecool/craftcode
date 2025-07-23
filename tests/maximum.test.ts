import { describe, it, expect } from 'vitest'
import { max } from '../src/max'
describe("max", () => {
    it("should accept 0 and return 0", () => {
    expect(max([])).toBe(undefined)
  })
  it("should accept 0 and return 0", () => {
    expect(max([0])).toBe(0)
  })
  it("should accept 1 and return 1", () => {
    expect(max([1])).toBe(1)
  })
  it("should accept [1,2] and return 2", () => {
    expect(max([1,2])).toBe(2)
  })
    it("should accept [-1,-2] and return 2", () => {
    expect(max([-1,-2])).toBe(-1)
  })
})
