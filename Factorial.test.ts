import { Factorial } from './Factorial';

describe('Factorial', () => {
    test.each([
        [0, 1],
        [1, 1],
        [2, 2],
        [3, 6],
        [4, 24],
        [5, 120]
    ])('factorial(%i) returns %i', (input, expected) => {
        expect(Factorial.factorial(input)).toBe(expected);
    });

    test('factorial of larger number', () => {
        expect(Factorial.factorial(10)).toBe(3628800);
    });
});
