import { SquareList } from './SquareList';

describe('SquareList', () => {
    test('correctly squares the elements of an array', () => {
        const integersList = [4, 5, 20, 7, 10, 9];
        const expectedOutput = [16, 25, 400, 49, 100, 81];
        expect(SquareList.squareList(integersList)).toEqual(expectedOutput);
    });

    test('handles empty array', () => {
        const integersList: number[] = [];
        const expectedOutput: number[] = [];
        expect(SquareList.squareList(integersList)).toEqual(expectedOutput);
    });

    test('handles negative numbers', () => {
        const integersList = [-1, -2, -3];
        const expectedOutput = [1, 4, 9];
        expect(SquareList.squareList(integersList)).toEqual(expectedOutput);
    });

    test('handles array with zero', () => {
        const integersList = [0];
        const expectedOutput = [0];
        expect(SquareList.squareList(integersList)).toEqual(expectedOutput);
    });
});
