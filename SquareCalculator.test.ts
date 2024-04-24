import { SquareCalculator } from './SquareCalculator';

describe('SquareCalculator', () => {
    test('correctly calculates squares of numbers', () => {
        const inputArray = [1, 2, 3, 4, 5];
        const expectedOutput = [1, 4, 9, 16, 25];
        expect(SquareCalculator.calculateSquare(inputArray)).toEqual(expectedOutput);
    });

    test('handles empty array', () => {
        const inputArray: number[] = [];
        const expectedOutput: number[] = [];
        expect(SquareCalculator.calculateSquare(inputArray)).toEqual(expectedOutput);
    });

    test('handles array with negative numbers', () => {
        const inputArray = [-1, -2, -3];
        const expectedOutput = [1, 4, 9];
        expect(SquareCalculator.calculateSquare(inputArray)).toEqual(expectedOutput);
    });

    test('handles array with zero', () => {
        const inputArray = [0];
        const expectedOutput = [0];
        expect(SquareCalculator.calculateSquare(inputArray)).toEqual(expectedOutput);
    });
});
