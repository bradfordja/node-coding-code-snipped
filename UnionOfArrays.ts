export class UnionOfArrays {
    static getUnion(array1: number[], array2: number[]): Set<number> {
        const unionSet: Set<number> = new Set();

        // Add all elements of array1 to the set
        for (const num of array1) {
            unionSet.add(num);
        }

        // Add all elements of array2 to the set
        for (const num of array2) {
            unionSet.add(num);
        }

        return unionSet;
    }

    static main(): void {
        const array1 = [1, 2, 3, 4, 5];
        const array2 = [4, 5, 6, 7, 8];

        const union = UnionOfArrays.getUnion(array1, array2);
        console.log(`Union: ${Array.from(union)}`);
    }
}

UnionOfArrays.main();
