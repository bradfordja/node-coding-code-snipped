export class IndexOfSum {
    static getIndexOfSum(list: number[], x: number): [number, number] | null {
        const map = new Map<number, number>();

        for (let i = 0; i < list.length; i++) {
            const diff = x - list[i];
            if (map.has(diff)) {
                return [map.get(diff)!, i];
            }
            map.set(list[i], i);
        }

        return null;
    }

    static main(): void {
        const list = [1, 2, 3, 6];
        console.log(IndexOfSum.getIndexOfSum(list, 5));
    }
}

IndexOfSum.main();
