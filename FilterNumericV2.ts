export class FilterNumericV2 {
    static analyze(nums: number[]): Map<string, number[]> {
        const result = new Map<string, number[]>();

        // Use a Map to count occurrences, filtering non-eligible numbers first.
        const counts = new Map<number, number>();
        nums.filter(num => num > 0 && num <= 1000000)
            .forEach(num => {
                counts.set(num, (counts.get(num) || 0) + 1);
            });

        // Determine missing numbers using a loop, filtering out those present in the counts map.
        const missing: number[] = [];
        for (let i = 1; i <= 1000000; i++) {
            if (!counts.has(i)) {
                missing.push(i);
            }
        }

        // Determine duplicated numbers from the counts map.
        const duplicated: number[] = [];
        counts.forEach((count, num) => {
            if (count > 1) {
                duplicated.push(num);
            }
        });

        result.set("missing", missing);
        result.set("duplicated", duplicated);

        return result;
    }

    static main(): void {
        const numArray = [-10, -4, -4, 0, 1, 3, 3, 3, 3, 5, 6, 6, 999999, 1000000000, 1000000000, 1000000001];
        const result = FilterNumericV2.analyze(numArray);

        console.log("Missing:", result.get("missing"));
        console.log("Duplicated:", result.get("duplicated"));
    }
}

FilterNumericV2.main();
