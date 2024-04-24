export class PrintEvenOddUsingArrayList {
    static separateEven(numbers: number[]): number[] {
        const evenNumbers: number[] = [];
        for (const num of numbers) {
            if (num % 2 === 0) {
                evenNumbers.push(num);
            }
        }
        return evenNumbers;
    }

    static separateOdd(numbers: number[]): number[] {
        const oddNumbers: number[] = [];
        for (const num of numbers) {
            if (num % 2 !== 0) {
                oddNumbers.push(num);
            }
        }
        return oddNumbers;
    }

    static main(): void {
        const numbers: number[] = [];
        for (let i = 1; i <= 10; i++) {
            numbers.push(i);
        }
        console.log("Even Numbers:", PrintEvenOddUsingArrayList.separateEven(numbers));
        console.log("Odd Numbers:", PrintEvenOddUsingArrayList.separateOdd(numbers));
    }
}

PrintEvenOddUsingArrayList.main();
