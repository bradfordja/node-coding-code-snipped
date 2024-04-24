export class ConcatenatedWordCount {
    static getConcatenateWordCount(stream1: string[], stream2: string[]): Map<string, number> {
        const wordCountMap = new Map<string, number>();

        // Count words from the first stream
        stream1.forEach(word => {
            wordCountMap.set(word, (wordCountMap.get(word) || 0) + 1);
        });

        // Count words from the second stream
        stream2.forEach(word => {
            wordCountMap.set(word, (wordCountMap.get(word) || 0) + 1);
        });

        return wordCountMap;
    }

    static main(): void {
        const stream1 = ["cat", "rat", "dog"];
        const stream2 = ["cat", "dog", "cow", "dock"];

        const wordCountMap = ConcatenatedWordCount.getConcatenateWordCount(stream1, stream2);

        // Print the concatenated word count
        wordCountMap.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
    }
}

ConcatenatedWordCount.main();
