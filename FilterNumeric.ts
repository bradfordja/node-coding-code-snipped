export class FilterNumeric {
    static analyze(nums: number[]): Map<string, number[]> {
        const result = new Map<string, number[]>();

        // This array helps track the count of numbers.
        const tracker = new Array(1000001).fill(0);

        // Iterate through the nums and update our tracker array.
        for (const num of nums) {
            if (num > 0 && num <= 1000000) {
                tracker[num]++;
            }
        }

        const missing: number[] = [];
        const duplicated: number[] = [];

        // Now, process our tracker array.
        for (let i = 1; i <= 1000000; i++) {
            if (tracker[i] === 0) {
                missing.push(i);
            } else if (tracker[i] > 1) {
                duplicated.push(i);
            }
        }

        result.set("missing", missing);
        result.set("duplicated", duplicated);

        return result;
    }

    static main(): void {
        const numArray = [-10, -4, -4, 0, 1, 3, 3, 3, 3, 5, 6, 6, 999999, 1000000000, 1000000000, 1000000001];
        const result = FilterNumeric.analyze(numArray);

        console.log("Missing:", result.get("missing"));
        console.log("Duplicated:", result.get("duplicated"));
    }
}

FilterNumeric.main();
