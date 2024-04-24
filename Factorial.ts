export class Factorial {
    static factorial(n: number): number {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * Factorial.factorial(n - 1);
    }

    static main(): void {
        const num = 7;
        const result = Factorial.factorial(num);
        console.log(`Factorial of ${num} is: ${result}`);
    }
}

Factorial.main();
