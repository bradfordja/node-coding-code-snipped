export class BracketBalancer {
    static isBalanced(expression: string): boolean {
        const stack: string[] = [];

        for (const ch of expression) {
            if (ch === '{' || ch === '(' || ch === '[') {
                stack.push(ch);
            } else if (ch === '}' || ch === ')' || ch === ']') {
                if (stack.length === 0) return false;

                const last = stack.pop() as string;
                if (!BracketBalancer.isPairValid(last, ch)) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }

    private static isPairValid(open: string, close: string): boolean {
        return (open === '{' && close === '}') ||
               (open === '(' && close === ')') ||
               (open === '[' && close === ']');
    }

    static main(): void {
        console.log(BracketBalancer.isBalanced("{{(){}}}")); // true
        console.log(BracketBalancer.isBalanced("}{}{"));     // false
        console.log(BracketBalancer.isBalanced("({})"));     // true
    }
}

BracketBalancer.main();
