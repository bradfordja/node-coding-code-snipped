export class LengthOfLongestSubstring {
    static lengthOfLongestSubstring(s: string): number {
        let maxLength = 0;

        for (let right = 0, left = 0; right < s.length; right++) {
            const char = s.charAt(right);
            const index = s.indexOf(char, left);

            if (index < right) {
                left = index + 1;
            }
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }

    static main(): void {
        const max = LengthOfLongestSubstring.lengthOfLongestSubstring("eadiedniweif");
        console.log(`Max length: ${max} value`);
    }
}

LengthOfLongestSubstring.main();
