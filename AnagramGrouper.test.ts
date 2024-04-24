import { AnagramGrouper } from './AnagramGrouper';

describe('AnagramGrouper', () => {
    test('groups anagrams correctly', () => {
        const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
        const expectedOutput = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];

        const output = AnagramGrouper.groupAnagrams(input);
        expect(new Set(output.map(group => new Set(group)))).toEqual(new Set(expectedOutput.map(group => new Set(group))));
    });

    test('handles empty input', () => {
        const input: string[] = [];
        const expectedOutput: string[][] = [];
        const output = AnagramGrouper.groupAnagrams(input);
        expect(output).toEqual(expectedOutput);
    });

    test('handles null or undefined input', () => {
        const input = undefined;
        const expectedOutput: string[][] = [];
        const output = AnagramGrouper.groupAnagrams(input as any);
        expect(output).toEqual(expectedOutput);
    });
});
