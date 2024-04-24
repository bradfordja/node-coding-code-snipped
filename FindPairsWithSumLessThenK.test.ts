import { FindPairsWithSumLessThenK } from './FindPairsWithSumLessThenK';

describe('FindPairsWithSumLessThenK', () => {
    test('finds all pairs with sum less than K correctly', () => {
        const A = [2, 7, 11, 15];
        const K = 19;
        const expectedPairs = [
            [2, 15],
            [2, 11],
            [2, 7],
            [7, 11]
        ];
        
        const result = FindPairsWithSumLessThenK.getAllPairsWithSumLessThanK(A, K);
        expect(result).toEqual(expect.arrayContaining(expectedPairs));
        expect(result.length).toBe(expectedPairs.length);
    });

    test('returns an empty array if no pairs found', () => {
        const A = [1, 2, 3, 4];
        const K = 5;
        const expectedPairs: [number, number][] = [];
        
        const result = FindPairsWithSumLessThenK.getAllPairsWithSumLessThanK(A, K);
        expect(result).toEqual(expectedPairs);
    });
});
