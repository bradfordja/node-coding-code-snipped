import { ConcatenatedWordCount } from './ConcatenatedWordCount';

describe('ConcatenatedWordCount', () => {
    test('counts words correctly from two streams', () => {
        const stream1 = ["apple", "banana", "apple"];
        const stream2 = ["banana", "cherry", "apple"];

        const expected = new Map<string, number>([
            ["apple", 3],
            ["banana", 2],
            ["cherry", 1]
        ]);

        const result = ConcatenatedWordCount.getConcatenateWordCount(stream1, stream2);
        expect(result).toEqual(expected);
    });

    test('handles empty streams', () => {
        const stream1: string[] = [];
        const stream2: string[] = [];

        const expected = new Map<string, number>();

        const result = ConcatenatedWordCount.getConcatenateWordCount(stream1, stream2);
        expect(result).toEqual(expected);
    });

    test('handles one empty and one non-empty stream', () => {
        const stream1: string[] = [];
        const stream2 = ["banana", "banana", "cherry"];

        const expected = new Map<string, number>([
            ["banana", 2],
            ["cherry", 1]
        ]);

        const result = ConcatenatedWordCount.getConcatenateWordCount(stream1, stream2);
        expect(result).toEqual(expected);
    });
});
