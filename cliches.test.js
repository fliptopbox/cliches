const cliches = require(`./cliches.js`);

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
        expect(cliches.test(`and they kept all the eggs in one basket`)) //
            .toEqual(expected);

        expect(cliches.test(`they kept all their eggs in one basket`)) //
            .toEqual(expected);

        expect(cliches.test(`he kept all his eggs in one basket`)) //
            .toEqual(expected);
    });

    test('detects multilple cliches in multiline corpus', () => {
        const corpus = `
          she was ugly,
          as "ugly as sin itself" on yeah,
          and old, as old as time too, so
          she did have an axe to grind and
          yet he was totally under her thumb`;

        expect(cliches.test(corpus)).toHaveLength(4);
    });
});
