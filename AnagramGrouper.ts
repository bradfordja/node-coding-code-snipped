type StringListMap = Map<string, string[]>;

class AnagramGrouper {
    static groupAnagrams(strs: string[]): string[][] {
        if (!strs || strs.length === 0) {
            return [];
        }

        const map: StringListMap = new Map();
        for (const s of strs) {
            const key = s.split('').sort().join('');
            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key)?.push(s);
        }

        return Array.from(map.values());
    }

    static main(): void {
        const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
        const groupedAnagrams = AnagramGrouper.groupAnagrams(strs);
        console.log("Grouped Anagrams:", groupedAnagrams);
    }
}

AnagramGrouper.main();

/*
Breakdown of the TypeScript Version
Type Definitions:
StringListMap: A type alias for a map where keys are strings and values are arrays of strings. This helps clarify the types used in the map operations.
AnagramGrouper Class:
groupAnagrams(strs: string[]): string[][]: This method takes an array of strings and groups them into arrays where each array contains anagrams of each other. The method:
Checks if the input array is valid and non-empty.
Uses a map to store groups of anagrams, with the sorted string as the key.
Splits each string into characters, sorts them, and rejoins them to form the key.
Adds the original string to the appropriate list in the map.
Converts the map values to an array of arrays for the final output.
main(): This static method demonstrates the functionality of the groupAnagrams method by grouping a predefined array of strings and logging the result.
Usage and Compilation
This TypeScript code can be compiled using the TypeScript compiler (tsc) and run in a Node.js environment. Make sure your TypeScript is set up to compile to a compatible JavaScript version for your Node.js runtime. Run tsc AnagramGrouper.ts to compile, followed by node AnagramGrouper.js to execute the program.
*/
