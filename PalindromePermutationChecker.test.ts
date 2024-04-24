import { PalindromePermutationChecker } from './PalindromePermutationChecker';

describe('PalindromePermutationChecker', () => {
    test('correctly identifies strings that can permute to a palindrome', () => {
        expect(PalindromePermutationChecker.canPermutePalindrome("tactcoa")).toBe(true);
        expect(PalindromePermutationChecker.canPermutePalindrome("aab")).toBe(true);
        expect(PalindromePermutationChecker.canPermutePalindrome("carerac")).toBe(true);
    });

    test('correctly identifies strings that cannot permute to a palindrome', () => {
        expect(PalindromePermutationChecker.canPermutePalindrome("java")).toBe(false);
        expect(PalindromePermutationChecker.canPermutePalindrome("abcde")).toBe(false);
    });

    test('handles edge cases correctly', () => {
        expect(PalindromePermutationChecker.canPermutePalindrome("")).toBe(true);
        expect(PalindromePermutationChecker.canPermutePalindrome("a")).toBe(true);
        expect(PalindromePermutationChecker.canPermutePalindrome("bb")).toBe(true);
    });
});
