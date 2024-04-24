import { ArrayIntersection } from './ArrayIntersection';

describe('ArrayIntersection', () => {
    test('finds intersection correctly', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [3, 4, 5, 6, 7];
        const expected = [3, 4, 5];
        expect(ArrayIntersection.findIntersection(arr1, arr2)).toEqual(expect.arrayContaining(expected));
        expect(ArrayIntersection.findIntersection(arr1, arr2).length).toBe(expected.length);
    });

    test('handles no intersection', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const expected: number[] = [];
        expect(ArrayIntersection.findIntersection(arr1, arr2)).toEqual(expected);
    });

    test('handles one empty array', () => {
        const arr1 = [1, 2, 3];
        const arr2: number[] = [];
        const expected: number[] = [];
        expect(ArrayIntersection.findIntersection(arr1, arr2)).toEqual(expected);
    });

    test('handles two empty arrays', () => {
        const arr1: number[] = [];
        const arr2: number[] = [];
        const expected: number[] = [];
        expect(ArrayIntersection.findIntersection(arr1, arr2)).toEqual(expected);
    });
});
