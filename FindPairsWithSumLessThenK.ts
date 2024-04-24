export class FindPairsWithSumLessThenK {
    static getAllPairsWithSumLessThanK(A: number[], K: number): [number, number][] {
        A.sort((a, b) => a - b);  // Sort the array in ascending order
        let pairsList: [number, number][] = [];
        let left = 0, right = A.length - 1;

        while (left < right) {
            let currentSum = A[left] + A[right];

            if (currentSum < K) {
                for (let i = right; i > left; i--) {
                    pairsList.push([A[left], A[i]]);
                }
                left++;
            } else {
                right--;
            }
        }

        return pairsList;
    }

    static main(): void {
        let A = [2, 7, 11, 15];
        let K = 19;

        let result = FindPairsWithSumLessThenK.getAllPairsWithSumLessThanK(A, K);

        if (result.length > 0) {
            console.log("Pairs found:");
            result.forEach(pair => console.log(`${pair[0]}, ${pair[1]}`));
        } else {
            console.log("No such pairs found.");
        }
    }
}

FindPairsWithSumLessThenK.main();
