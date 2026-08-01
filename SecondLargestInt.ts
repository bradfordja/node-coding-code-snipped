export class SecondLargestInt {
    static findSecondLargest(numbers: number[]): number | null {
        if (numbers.length < 2) {
            return null; // Not enough elements to find the second largest
        }

        let largest = -Infinity;
        let secondLargest = -Infinity;

        for (const num of numbers) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num < largest) {
                secondLargest = num;
            }
        }

        return secondLargest === -Infinity ? null : secondLargest;
    }

    static main(): void {
        const inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];
        const secondLargest = SecondLargestInt.findSecondLargest(inputArray);

        if (secondLargest !== null) {
            console.log(`The second largest number is: ${secondLargest}`);
        } else {
            console.log('There is no second largest number.');
        }
    }
}

SecondLargestInt.main();

