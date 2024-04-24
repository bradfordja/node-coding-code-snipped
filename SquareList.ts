export class SquareList {
    static squareList(integersList: number[]): number[] {
        return integersList.map(n => n * n);
    }

    static main(): void {
        const integersList = [4, 5, 20, 7, 10, 9];
        const squaredIntegers = SquareList.squareList(integersList);
        console.log(squaredIntegers);  // This will print squared numbers
    }
}

SquareList.main();
