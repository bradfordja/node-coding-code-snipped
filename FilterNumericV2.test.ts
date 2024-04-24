import { FilterNumericV2 } from './FilterNumericV2';

describe('FilterNumericV2', () => {
    test('identifies missing and duplicated numbers correctly', () => {
        const nums = [1, 2, 2, 5, 5, 5, 999999, 1000000, 1000000];
        const result = FilterNumericV2.analyze(nums);
        const missing = result.get('missing')!;
        const duplicated = result.get('duplicated')!;

        expect(missing.length).toBeGreaterThan(0); // Check if there are any missing numbers
        expect(duplicated).toEqual([2, 5, 1000000]); // Check the specific duplicated numbers
        expect(missing.includes(3)).toBe(true); // Check a specific missing number
    });

    test('handles no duplicates or missing within range', () => {
        const nums = [1, 3, 5];
        const result = FilterNumericV2.analyze(nums);
        expect(result.get('missing')!.length).toBeGreaterThan(0);
        expect(result.get('duplicated')).toEqual([]);
    });

    test('handles empty input', () => {
        const nums: number[] = [];
        const result = FilterNumericV2.analyze(nums);
        expect(result.get('missing')!.length).toBe(1000000);
        expect(result.get('duplicated')).toEqual([]);
    });
});
