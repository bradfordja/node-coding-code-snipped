export class ReverseInteger {
    static reverseInteger(number: number): number {
        let reversed = 0;
        let num = number;

        while (num !== 0) {
            const digit = num % 10;
            reversed = reversed * 10 + digit;
            num = (num / 10) | 0;  // The "| 0" operation truncates the decimal, similar to Math.floor for positive numbers
        }

        return reversed;
    }

    static main(): void {
        console.log(ReverseInteger.reverseInteger(15));    // 51
        console.log(ReverseInteger.reverseInteger(36));    // 63
        console.log(ReverseInteger.reverseInteger(5));     // 5
        console.log(ReverseInteger.reverseInteger(65432)); // 23456
    }
}

ReverseInteger.main();
