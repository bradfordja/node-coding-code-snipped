export class ArrayIntersection {
    static findIntersection(arr1: number[], arr2: number[]): number[] {
        const set1 = new Set(arr1);
        const intersection = new Set<number>();

        for (const num of arr2) {
            if (set1.has(num)) {
                intersection.add(num);
            }
        }

        return Array.from(intersection);
    }

    static main(): void {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [3, 4, 5, 6, 7];
        const result = ArrayIntersection.findIntersection(arr1, arr2);
        console.log("Intersection of Arrays:", result.join(' '));
    }
}

ArrayIntersection.main();
