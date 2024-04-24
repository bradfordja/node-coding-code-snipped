export class MinCharsForPalindrome {
    static findMinInsertions(str: string): number {
        const n = str.length;
        // Reverse the given string
        const rev = str.split('').reverse().join('');
        
        // Get length of the longest common subsequence of str and its reverse
        const lcs = this.longestCommonSubsequence(str, rev);
        
        // Subtract the length of LCS from the original string length to get the result
        return (n - lcs);
    }

    static longestCommonSubsequence(a: string, b: string): number {
        const m = a.length;
        const n = b.length;
        const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

        for (let i = 0; i <= m; i++) {
            for (let j = 0; j <= n; j++) {
                if (i === 0 || j === 0) {
                    dp[i][j] = 0;
                } else if (a.charAt(i - 1) === b.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[m][n];
    }

    static main(): void {
        const str = "ABCAB"; 
        console.log(`Minimum characters needed to convert to palindrome: ${this.findMinInsertions(str)}`);
    }
}

MinCharsForPalindrome.main();
