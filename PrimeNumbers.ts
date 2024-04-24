export class PrimeNumbers {
    static getPrimeNumbersUptoN(n: number): number[] {
        const primeNumbers: number[] = [];

        for (let numberToCheck = 2; numberToCheck <= n; numberToCheck++) {
            let isPrime = true;
            for (let factor = 2; factor <= Math.sqrt(numberToCheck); factor++) {
                if (numberToCheck % factor === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primeNumbers.push(numberToCheck);
            }
        }
        return primeNumbers;
    }

    static main(): void {
        const primeNumbers = PrimeNumbers.getPrimeNumbersUptoN(100);
        console.log("Prime numbers found:", primeNumbers);
    }
}

PrimeNumbers.main();
