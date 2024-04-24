import { PrimeNumbers } from './PrimeNumbers';

describe('PrimeNumbers', () => {
    test('correctly identifies prime numbers up to a given number', () => {
        expect(PrimeNumbers.getPrimeNumbersUptoN(10)).toEqual([2, 3, 5, 7]);
        expect(PrimeNumbers.getPrimeNumbersUptoN(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    });

    test('returns empty array for n less than 2', () => {
        expect(PrimeNumbers.getPrimeNumbersUptoN(1)).toEqual([]);
    });

    test('handles single number 2', () => {
        expect(PrimeNumbers.getPrimeNumbersUptoN(2)).toEqual([2]);
    });

    test('checks up to 100', () => {
        const result = PrimeNumbers.getPrimeNumbersUptoN(100);
        expect(result).toContain(97);
        expect(result.length).toBe(25);  // There are 25 prime numbers up to 100
    });
});
