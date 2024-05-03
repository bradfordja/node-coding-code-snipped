const { from, reduce } = require('rxjs');
const { map, groupBy, mergeMap, toArray } = require('rxjs/operators');

function countUniqueCharacters(s) {
    return from(s.split(''))  // Create a stream from the characters in the string
        .pipe(
            groupBy(char => char),  // Group by character
            mergeMap(group => group.pipe(
                reduce((acc, _) => acc + 1, 0),  // Count occurrences in each group
                map(count => ({ char: group.key, count }))  // Map to an object with char and count
            )),
            reduce((acc, curr) => {  // Collect all counts into a single object
                acc[curr.char] = curr.count;
                return acc;
            }, {})
        );
}

countUniqueCharacters("amitraviravalilijoi").subscribe({
    next: uniqueCharacters => {
        console.log("Unique character counts:");
        for (const char in uniqueCharacters) {
            console.log(`${char}: ${uniqueCharacters[char]}`);
        }
    },
    error: err => console.error(err)
});
