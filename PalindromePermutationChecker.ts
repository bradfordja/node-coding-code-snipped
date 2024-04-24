export class PalindromePermutationChecker {
    static canPermutePalindrome(s: string): boolean {
        const charCounts: Map<string, number> = new Map();

        // Count each character
        for (const c of s) {
            charCounts.set(c, (charCounts.get(c) || 0) + 1);
        }

        // Count the number of characters that have an odd count
        let oddCount = 0;
        for (const count of charCounts.values()) {
            if (count % 2 !== 0) {
                oddCount++;
            }
        }

        // A string can form a palindrome if there is at most one odd count
        return oddCount <= 1;
    }

    static main(): void {
        const input1 = "tactcoa";
        const input2 = "java";
        
        console.log(`Can "${input1}" permute to a palindrome? ${PalindromePermutationChecker.canPermutePalindrome(input1)}`);
        console.log(`Can "${input2}" permute to a palindrome? ${PalindromePermutationChecker.canPermutePalindrome(input2)}`);
    }
}

PalindromePermutationChecker.main();
