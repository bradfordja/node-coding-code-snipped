import { IndexOfSum } from './IndexOfSum';

describe('IndexOfSum', () => {
    test('finds correct indices for given sum', () => {
        const list = [1, 2, 3, 6];
        const x = 5;
        const expected = [1, 2]; // indices of 2 and 3 which sum up to 5
        const result = IndexOfSum.getIndexOfSum(list, x);
        expect(result).toEqual(expected);
    });

    test('returns null when no two numbers sum up to the target', () => {
        const list = [1, 2, 3, 6];
        const x = 20;
        const result = IndexOfSum.getIndexOfSum(list, x);
        expect(result).toBeNull();
    });

    test('handles empty array', () => {
        const list: number[] = [];
        const x = 5;
        const result = IndexOfSum.getIndexOfSum(list, x);
        expect(result).toBeNull();
    });
});
