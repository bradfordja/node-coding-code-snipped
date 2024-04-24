import { UnionOfArrays } from './UnionOfArrays';

describe('UnionOfArrays', () => {
    test('returns correct union of two arrays', () => {
        const array1 = [1, 2, 3, 4, 5];
        const array2 = [4, 5, 6, 7, 8];
        const expectedUnion = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
        expect(UnionOfArrays.getUnion(array1, array2)).toEqual(expectedUnion);
    });

    test('handles arrays with duplicate elements', () => {
        const array1 = [1, 2, 2, 3];
        const array2 = [2, 3, 3, 4];
        const expectedUnion = new Set([1, 2, 3, 4]);
        expect(UnionOfArrays.getUnion(array1, array2)).toEqual(expectedUnion);
    });

    test('handles empty arrays correctly', () => {
        const array1: number[] = [];
        const array2: number[] = [];
        const expectedUnion = new Set<number>();
        expect(UnionOfArrays.getUnion(array1, array2)).toEqual(expectedUnion);
    });

    test('handles one empty array', () => {
        const array1 = [1, 2, 3];
        const array2: number[] = [];
        const expectedUnion = new Set([1, 2, 3]);
        expect(UnionOfArrays.getUnion(array1, array2)).toEqual(expectedUnion);
    });
});
