import { describe, it, expect } from 'vitest'
import { isPalindrome } from '../src/palindrome'

describe('palindrome', () => {
  it('should return false for no input', () => {
    expect(isPalindrome()).toBe(false);
  })

  it('should return true for empty string', () => {
    expect(isPalindrome("")).toBe(true);
  })

  it('should return false for text', () => {
    expect(isPalindrome("text")).toBe(false);
  })

  it('should return true for madam', () => {
    expect(isPalindrome("madam")).toBe(true);
  })

  it('should return true for Madam', () => {
    expect(isPalindrome("Madam")).toBe(true);
  })

  it('should return true for a palindrome phrase', () => {
    expect(isPalindrome("Was it a car or a cat I saw")).toBe(true);
  })

  it('should return true for a palindrome phrase with punctuations', () => {
    expect(isPalindrome("Was it a car or a cat I saw?")).toBe(true);
  })

  it('should return false for a palindrome phrase with numbers', () => {
    expect(isPalindrome("2Was it a car or a cat I saw?1")).toBe(false);
  })

  it('should return false for a non palindrome chinese phrase', () => {
    expect(isPalindrome("上海自來水來自海")).toBe(false);
  })

  it('should return true for a palindrome chinese phrase', () => {
    expect(isPalindrome("上海自來水來自海上")).toBe(true);
  })

  it('should return false for a non palindrome with unicode characters', () => {
    expect(isPalindrome("Eine göldne, gute Tugend: Lüge nie!")).toBe(false);
  })

  it('should return true for a palindrome with unicode characters', () => {
    expect(isPalindrome("Eine güldne, gute Tugend: Lüge nie!")).toBe(true);
  })

  it('should return true for a palindrome with emojis', () => {
    expect(isPalindrome("🧟")).toBe(true);
  })

  it('should return false for a non palindrome with emojis', () => {
    expect(isPalindrome("🧟🎄")).toBe(false);
  })
})
 