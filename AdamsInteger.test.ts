import { AdamsInteger } from './AdamsInteger';

describe('AdamsInteger', () => {
    test('12 is an Adam integer', () => {
        expect(AdamsInteger.isAdamInteger(12)).toBe(true);
    });

    test('36 is not an Adam integer', () => {
        expect(AdamsInteger.isAdamInteger(36)).toBe(false);
    });

    test('5 is not an Adam integer', () => {
        expect(AdamsInteger.isAdamInteger(5)).toBe(false);
    });

    test('65432 is not an Adam integer', () => {
        expect(AdamsInteger.isAdamInteger(65432)).toBe(false);
    });
});

/*Running Your Tests
With everything set up, you can run your tests by executing npm test in your terminal. 
This command will run Jest, which in turn will execute all test files it finds in your project 
(typically any files ending in .test.ts or .spec.ts).

These tests will validate whether isAdamInteger correctly identifies Adam and non-Adam numbers. 
Each test case checks a specific input against its expected output, 
ensuring that the implementation behaves as intended.
*/
