import { describe, it, expect } from 'vitest'
import { targetCount } from '../src/targetCount'

describe("targetCount",()=>{
  it("should return undefined when the target count list is empty", ()=>{
    expect(targetCount(0,[])).toBe(undefined)
  })
  it("should return 0 when target matches none of elements",() =>{
    expect(targetCount(2,["a", "b"])).toBe(0)
  })
    it("should return 1 when target matches one of elements",() =>{
    expect(targetCount(2,[2, "b"])).toBe(1)
  })
      it("should return 2 when target matches 2 of the elements",() =>{
    expect(targetCount(2,[2, 2])).toBe(2)
  })
        it("should return 1 when target matches 2 of the elements",() =>{
    expect(targetCount([1, 2],[2,"a","b", [1,2]])).toBe(1)
  })
})