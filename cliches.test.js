// const cliches = require(`./cliches.js`);
import * as cliches from './cliches.js';

describe('cliche catcher', () => {
    test('given nothing returns "null"', () => {
        expect(cliches.test()).toBeNull();
    });

    test('detects known and unknown phrases', () => {
        expect(cliches.test('no cliche here')).toBeNull();
        expect(cliches.test('armed to the teeth')).toHaveLength(1);
    });

    test('detects gender specific phrases', () => {
        const expexted = ['ace up (his|her) sleeve'];

        expect(cliches.test('ace up his sleeve')).toEqual(expexted);
        expect(cliches.test('ace up her sleeve')).toEqual(expexted);
    });

    test('detects dynamic word groups', () => {
        const expected = ['all (\\w+) eggs in one basket'];

        // dynamic word group match (\w+)
        expect(cliches.test('and they kept all the eggs in one basket')) //
            .toEqual(expected);

        expect(cliches.test('they kept all their eggs in one basket')) //
            .toEqual(expected);

        expect(cliches.test('he kept all his eggs in one basket')) //
            .toEqual(expected);
    });

    test('detects multilple cliches in multiline corpus', () => {
        const corpus = `
            she was ugly,
            as "ugly as sin itself" on yeah,
            and old, as old as time, so
            she did have an axe to grind ...
            and yet he was totally under her thumb`;

        expect(cliches.test(corpus)).toHaveLength(4);
    });

    test('normalizes common word groups', () => {
        const { normalizeText } = cliches;

        expect(normalizeText('black & blue')).toBe(
            'black (&|n|and) blue'
        );

        expect(normalizeText('guns n roses')).toBe(
            'guns (&|n|and) roses'
        );

        expect(normalizeText('eat your heart out')).toBe(
            'eat (your|my) heart out'
        );

        expect(normalizeText('you are what you eat')).toBe(
            '(you|we) are what (you|we) eat'
        );

        expect(normalizeText('bee in his bonet')).toBe(
            'bee in (his|her) bonet'
        );
    });

    // test('normalize "his" to incl. his,her', () => {
    //     const { test } = cliches;
    //     const expected = ['bee in (his|her) bonnet'];
    //     expect(test('bee in his bonnet')).toEqual(expected);
    //     expect(test('bee in her bonnet')).toEqual(expected);
    // });

    // test('normalize "and" to incl. and,&,n', () => {
    //     const { test } = cliches;
    //     const expected = ['an arm (&|n|and) a leg'];
    //     expect(test('an arm and a leg')).toEqual(expected);
    // });
});
