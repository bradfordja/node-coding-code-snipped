export class NearestSquareRoot {
    static findNearestSquareRoot(num: number): number {
        if (num <= 1) {
            return num;
        }

        let start = 1, end = num, result = 0;

        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            const square = mid * mid;

            if (square === num) {
                return mid;
            }

            if (square < num) {
                start = mid + 1;
                result = mid;  // Update the potential nearest square root
            } else {
                end = mid - 1;
            }
        }

        // Check which is closer, the result or the next integer
        const nextInt = result + 1;
        if (Math.abs((nextInt * nextInt) - num) < Math.abs((result * result) - num)) {
            return nextInt;
        }

        return result;
    }

    static main(): void {
        const number = 300; 
        console.log(`Nearest square root of ${number} is: ${this.findNearestSquareRoot(number)}`);
    }
}

NearestSquareRoot.main();
