import { BracketBalancer } from './BracketBalancer';

describe('BracketBalancer', () => {
    test('correctly identifies balanced expressions', () => {
        expect(BracketBalancer.isBalanced("{{(){}}}")).toBe(true);
        expect(BracketBalancer.isBalanced("({})")).toBe(true);
        expect(BracketBalancer.isBalanced("[{}]")).toBe(true);
    });

    test('correctly identifies unbalanced expressions', () => {
        expect(BracketBalancer.isBalanced("}{}{")).toBe(false);
        expect(BracketBalancer.isBalanced("(({))")).toBe(false);
        expect(BracketBalancer.isBalanced("{{()}}]")).toBe(false);
    });

    test('handles empty string as balanced', () => {
        expect(BracketBalancer.isBalanced("")).toBe(true);
    });
});
