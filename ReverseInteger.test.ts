import { ReverseInteger } from './ReverseInteger';

describe('ReverseInteger', () => {
    test('reverses positive numbers correctly', () => {
        expect(ReverseInteger.reverseInteger(15)).toBe(51);
        expect(ReverseInteger.reverseInteger(36)).toBe(63);
        expect(ReverseInteger.reverseInteger(5)).toBe(5);
        expect(ReverseInteger.reverseInteger(65432)).toBe(23456);
    });

    test('handles zero as input', () => {
        expect(ReverseInteger.reverseInteger(0)).toBe(0);
    });

    test('reverses negative numbers correctly', () => {
        expect(ReverseInteger.reverseInteger(-123)).toBe(-321);
        expect(ReverseInteger.reverseInteger(-100)).toBe(-1);
    });

    test('handles large numbers', () => {
        expect(ReverseInteger.reverseInteger(2147483647)).toBe(7463847412);  // Overflow case, not normally handled
        expect(ReverseInteger.reverseInteger(-2147483648)).toBe(-8463847412); // Underflow case
    });
});
