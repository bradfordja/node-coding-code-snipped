import { IntersectionOfArrays } from './IntersectionOfArrays';

describe('IntersectionOfArrays', () => {
    test('finds intersection correctly between two arrays', () => {
        const array1 = [1, 2, 3, 4, 5];
        const array2 = [3, 4, 5, 6, 7];
        const expected = new Set([3, 4, 5]);
        const result = IntersectionOfArrays.getIntersection(array1, array2);
        expect(result).toEqual(expected);
    });

    test('returns empty set when there is no intersection', () => {
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        const expected = new Set();
        const result = IntersectionOfArrays.getIntersection(array1, array2);
        expect(result).toEqual(expected);
    });

    test('handles one empty array correctly', () => {
        const array1 = [];
        const array2 = [1, 2, 3, 4, 5];
        const expected = new Set();
        const result = IntersectionOfArrays.getIntersection(array1, array2);
        expect(result).toEqual(expected);
    });
});
