export function isPalindrome(input?: string): boolean {
  if (input === undefined)  {
    return false;
  }

  if (input.length === 1) {
    return true;
  }
  
  return getReversed(normalize(input)) === normalize(input);
}

function normalize(str: string): string {
  const SPECIAL_CHARACTER_REGEX = /[\p{P}\p{White_Space}]+/gu;
  return str.toLowerCase().replace(SPECIAL_CHARACTER_REGEX, '');
}

function getReversed(str: string): string {
  return [...str].reverse().join('');
}

/*
cleanStr.split('').reverse().join('')
How it works: Splits the string at each UTF-16 code unit (16-bit boundary)
Problem: Emojis and many Unicode characters use multiple UTF-16 code units (surrogate pairs)
Result: Breaks multi-byte characters into invalid pieces

Array.from(cleanStr).reverse().join('')
How it works: Converts string to array respecting Unicode code points (complete characters)
Benefit: Treats each emoji/Unicode character as a single unit
Result: Preserves character integrity during reverse
*/

/*
ASCII, 7-Bit
Control codes: 0-31, SP=32, DEL=127(1111111)
ISO 8859 8-bit 128-159 more control codes, 160 NBSP, 161-255(252 ū)
ISO 10646 -> Unicode
https://home.unicode.org/
utf-8, 16, 32
*/

// "Hello".split("") -> Splits at every UTF-8
// [..."Hello"] -> works with unicode points works with emojis
// UTF-8 by default GO.
// JAVA, JS it is UTF-16

