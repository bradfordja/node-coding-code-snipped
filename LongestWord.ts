import * as fs from 'fs';
import * as path from 'path';

export class LongestWord {
    findLongestWordInLine(line: string): string {
        const lineArray = line.split(" ");
        let largestIndex = 0;

        if (lineArray.length > 0) {
            for (let i = 0; i < lineArray.length; ++i) {
                if (lineArray[largestIndex].length < lineArray[i].length)
                    largestIndex = i;
            }
            return lineArray[largestIndex];
        }

        return "";  // empty line or no words
    }

    processFile(filePath: string): void {
        const fullPath = path.resolve(filePath);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const lines = fileContents.split('\n');

        lines.forEach(line => {
            console.log(this.findLongestWordInLine(line));
        });
    }

    static main(filePath: string): void {
        new LongestWord().processFile(filePath);
    }
}
