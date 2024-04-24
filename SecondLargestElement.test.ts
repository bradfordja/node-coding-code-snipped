import { SecondLargestElement } from './SecondLargestElement';

describe('SecondLargestElement', () => {
    test('correctly identifies the second largest element', () => {
        expect(SecondLargestElement.findSecondLargest([10, 5, 19, 8, 20, 15])).toBe(19);
        expect(SecondLargestElement.findSecondLargest([1, 2, 3, 4, 5])).toBe(4);
    });

    test('handles arrays with two elements', () => {
        expect(SecondLargestElement.findSecondLargest([1, 2])).toBe(1);
        expect(SecondLargestElement.findSecondLargest([2, 1])).toBe(1);
    });

    test('returns MIN_SAFE_INTEGER when array has fewer than two distinct elements', () => {
        expect(SecondLargestElement.findSecondLargest([1, 1])).toBe(Number.MIN_SAFE_INTEGER);
        expect(SecondLargestElement.findSecondLargest([2])).toBe(Number.MIN_SAFE_INTEGER);
    });

    test('handles arrays with negative numbers', () => {
        expect(SecondLargestElement.findSecondLargest([-2, -3, -1])).toBe(-2);
        expect(SecondLargestElement.findSecondLargest([-1, -5, -3, -4])).toBe(-3);
    });
});
