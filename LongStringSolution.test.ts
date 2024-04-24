import { LongStringSolution } from './LongStringSolution';

describe('LongStringSolution', () => {
    test('finds the length of the longest substring without repeating characters', () => {
        expect(LongStringSolution.lengthOfLongestSubstring("abcabcbb")).toBe(3);  // "abc"
        expect(LongStringSolution.lengthOfLongestSubstring("bbbbb")).toBe(1);     // "b"
        expect(LongStringSolution.lengthOfLongestSubstring("pwwkew")).toBe(3);    // "wke"
        expect(LongStringSolution.lengthOfLongestSubstring("")).toBe(0);         // ""
        expect(LongStringSolution.lengthOfLongestSubstring("dvdf")).toBe(3);     // "vdf"
        expect(LongStringSolution.lengthOfLongestSubstring("eadiedniweif")).toBe(6);  // "edniw"
    });
});
