export class LongStringSolution {
    static lengthOfLongestSubstring(s: string): number {
        let maxLength = 0;

        for (let i = 0; i < s.length; i++) {
            let currentSubstring = "";
            for (let j = i; j < s.length; j++) {
                if (currentSubstring.includes(s.charAt(j))) {
                    break;
                }
                currentSubstring += s.charAt(j);
                maxLength = Math.max(maxLength, currentSubstring.length);
            }
        }
        return maxLength;
    }

    static main(): void {
        const max = LongStringSolution.lengthOfLongestSubstring("eadiedniweif");
        console.log(`Max length: ${max} value`);
    }
}

LongStringSolution.main();
