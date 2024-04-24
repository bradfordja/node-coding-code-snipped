import { MinCharsForPalindrome } from './MinCharsForPalindrome';

describe('MinCharsForPalindrome', () => {
    test('computes minimum insertions for various strings', () => {
        expect(MinCharsForPalindrome.findMinInsertions("ABCAB")).toBe(1);
        expect(MinCharsForPalindrome.findMinInsertions("AAB")).toBe(0);
        expect(MinCharsForPalindrome.findMinInsertions("ABC")).toBe(2);
        expect(MinCharsForPalindrome.findMinInsertions("")).toBe(0);
        expect(MinCharsForPalindrome.findMinInsertions("ABBA")).toBe(0);
    });
});
