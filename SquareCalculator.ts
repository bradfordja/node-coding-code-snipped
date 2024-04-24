export class SquareCalculator {
    static calculateSquare(numbers: number[]): number[] {
        const squaredList: number[] = [];

        for (const num of numbers) {
            squaredList.push(num * num);
        }

        return squaredList;
    }

    static main(): void {
        const inputArray = [1, 2, 3, 4, 5];
        const squaredList = SquareCalculator.calculateSquare(inputArray);

        console.log(squaredList);  // This will print [1, 4, 9, 16, 25]
    }
}

SquareCalculator.main();
