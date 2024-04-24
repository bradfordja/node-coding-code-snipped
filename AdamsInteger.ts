class ReverseInteger {
    static reverseInteger(num: number): number {
        let reversed = 0;
        while (num > 0) {
            reversed = reversed * 10 + num % 10;
            num = Math.floor(num / 10);
        }
        return reversed;
    }
}

class AdamsInteger {
    static isAdamInteger(num: number): boolean {
        const reversedNum = ReverseInteger.reverseInteger(num);
        return ReverseInteger.reverseInteger(reversedNum * reversedNum) === num * num;
    }

    static main(): void {
        console.log(AdamsInteger.isAdamInteger(12));    // true
        console.log(AdamsInteger.isAdamInteger(36));    // false
        console.log(AdamsInteger.isAdamInteger(5));     // false
        console.log(AdamsInteger.isAdamInteger(65432)); // false
    }
}

AdamsInteger.main();
/*
Breakdown of the Code
ReverseInteger Class:
reverseInteger(num: number): This static method reverses the digits of an integer. It uses a while loop to extract each digit, appends it to a new integer reversed, and removes the digit from num.
AdamsInteger Class:
isAdamInteger(num: number): This static method checks if a number is an Adam number. It uses the reverseInteger method to reverse the number, square it, and then compares the reverse of this square with the square of the original number.
main(): This static method calls isAdamInteger for different numbers and logs the results, demonstrating how the Adam number check works.
You can run this TypeScript code in a Node.js environment after ensuring that you have the TypeScript compiler set up. Make sure to compile the TypeScript to JavaScript using the tsc command before running it with Node.js.
*/