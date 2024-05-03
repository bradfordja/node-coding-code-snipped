function countUniqueCharacters(s) {
    const characterCount = {};

    for (const char of s) {
        if (characterCount[char]) {
            characterCount[char] += 1;
        } else {
            characterCount[char] = 1;
        }
    }

    return characterCount;
}

const inputString = "amitraviravalilijoi";
const uniqueCharacters = countUniqueCharacters(inputString);

console.log("Unique character counts:");
for (const char in uniqueCharacters) {
    console.log(`${char}: ${uniqueCharacters[char]}`);
}
