import { LongestWord } from './LongestWord';

describe('LongestWord', () => {
    const longestWord = new LongestWord();

    test('finds the longest word in a line', () => {
        expect(longestWord.findLongestWordInLine("Hello world this is a test line")).toBe("Hello");
        expect(longestWord.findLongestWordInLine("Quick brown fox jumped over the lazy dog")).toBe("jumped");
    });

    test('returns empty string for empty line', () => {
        expect(longestWord.findLongestWordInLine("")).toBe("");
    });

    test('handles lines with same length words', () => {
        expect(longestWord.findLongestWordInLine("cat bat mat")).toBe("cat");
    });

    test('handles single word lines', () => {
        expect(longestWord.findLongestWordInLine("loneliness")).toBe("loneliness");
    });
});
