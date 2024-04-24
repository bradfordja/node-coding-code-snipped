export class StringReversal {
    // const reversed = input.split('').reverse().join('');
    static reverseString(input: string): string {
        let reversed = "";
        for (let i = input.length - 1; i >= 0; i--) {
            reversed += input.charAt(i);
        }
        return reversed;
    }

    static main(): void {
        const input = "Hello, World!";
        const reversedString = StringReversal.reverseString(input);
        console.log(`Reversed String: ${reversedString}`);
    }
}

StringReversal.main();
