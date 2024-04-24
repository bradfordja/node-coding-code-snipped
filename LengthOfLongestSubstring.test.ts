import { LengthOfLongestSubstring } from './LengthOfLongestSubstring';

describe('LengthOfLongestSubstring', () => {
    test('finds the length of the longest substring without repeating characters', () => {
        expect(LengthOfLongestSubstring.lengthOfLongestSubstring("abcabcbb")).toBe(3);  // "abc"
        expect(LengthOfLongestSubstring.lengthOfLongestSubstring("bbbbb")).toBe(1);     // "b"
        expect(LengthOfLongestSubstring.lengthOfLongestSubstring("pwwkew")).toBe(3);    // "wke"
        expect(LengthOfLongestSubstring.lengthOfLongestSubstring("")).toBe(0);         // ""
        expect(LengthOfLongestSubstring.lengthOfLongestSubstring("dvdf")).toBe(3);     // "vdf"
    });
});
