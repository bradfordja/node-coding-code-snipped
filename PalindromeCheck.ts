export class PalindromeCheck {
    static isPalindrome(input: string): boolean {
        const reversed = input.split('').reverse().join('');
        return input === reversed;
    }

    static main(): void {
        const str = "racecar";
        const isPalindrome = PalindromeCheck.isPalindrome(str);
        console.log(`${str} Is Palindrome: ${isPalindrome}`);
    }
}

PalindromeCheck.main();
