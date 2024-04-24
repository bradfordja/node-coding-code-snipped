export class IntersectionOfArrays {
    static getIntersection(array1: number[], array2: number[]): Set<number> {
        const set1 = new Set(array1);
        const intersectionSet = new Set<number>();

        for (const num of array2) {
            if (set1.has(num)) {
                intersectionSet.add(num);
            }
        }

        return intersectionSet;
    }

    static main(): void {
        const array1 = [1, 2, 3, 4, 5];
        const array2 = [4, 5, 6, 7, 8];
        console.log("Intersection:", Array.from(IntersectionOfArrays.getIntersection(array1, array2)));
    }
}

IntersectionOfArrays.main();
