export class SecondLargestElement {
    static findSecondLargest(arr: number[]): number {
        let largest = Number.MIN_SAFE_INTEGER;
        let secondLargest = Number.MIN_SAFE_INTEGER;

        for (const num of arr) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num !== largest) {
                secondLargest = num;
            }
        }
        return secondLargest;
    }

    static main(): void {
        const numbers = [10, 5, 19, 8, 20, 15];
        const result = SecondLargestElement.findSecondLargest(numbers);
        console.log(`Second Largest Element: ${result}`);
    }
}

SecondLargestElement.main();
