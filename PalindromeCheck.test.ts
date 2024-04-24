import { PalindromeCheck } from './PalindromeCheck';

describe('PalindromeCheck', () => {
    test('correctly identifies palindromes', () => {
        expect(PalindromeCheck.isPalindrome("racecar")).toBe(true);
        expect(PalindromeCheck.isPalindrome("madam")).toBe(true);
        expect(PalindromeCheck.isPalindrome("noon")).toBe(true);
    });

    test('correctly identifies non-palindromes', () => {
        expect(PalindromeCheck.isPalindrome("hello")).toBe(false);
        expect(PalindromeCheck.isPalindrome("world")).toBe(false);
        expect(PalindromeCheck.isPalindrome("palindrome")).toBe(false);
    });

    test('handles empty string and single character', () => {
        expect(PalindromeCheck.isPalindrome("")).toBe(true);
        expect(PalindromeCheck.isPalindrome("a")).toBe(true);
    });
});
