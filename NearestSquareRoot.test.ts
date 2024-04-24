import { NearestSquareRoot } from './NearestSquareRoot';

describe('NearestSquareRoot', () => {
    test.each([
        [300, 17],
        [1, 1],
        [4, 2],
        [10, 3],
        [26, 5],
        [15, 4],
        [2000, 45]
    ])('finds the nearest square root for %i to be %i', (num, expected) => {
        expect(NearestSquareRoot.findNearestSquareRoot(num)).toBe(expected);
    });

    test('handles zero correctly', () => {
        expect(NearestSquareRoot.findNearestSquareRoot(0)).toBe(0);
    });
});
