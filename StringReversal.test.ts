import { StringReversal } from './StringReversal';

describe('StringReversal', () => {
    test('correctly reverses strings', () => {
        expect(StringReversal.reverseString("Hello, World!")).toBe("!dlroW ,olleH");
        expect(StringReversal.reverseString("abcde")).toBe("edcba");
        expect(StringReversal.reverseString("12345")).toBe("54321");
    });

    test('handles empty string', () => {
        expect(StringReversal.reverseString("")).toBe("");
    });

    test('handles single character', () => {
        expect(StringReversal.reverseString("a")).toBe("a");
    });
});
