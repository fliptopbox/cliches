# clichés

/ˈkliːʃeɪ/

*noun*

plural noun: **clichés**; plural noun: **cliches**

1. a phrase or opinion that is overused and betrays a lack of original thought.
   "that old cliché ‘a woman's place is in the home’"
2. BRITISH•PRINTING - a stereotype or electrotype.



**This utility helps identify and list commonly used clichés used within a body of text**



- **keys** - Array - a list of first word keys

- **phrases** - Array - a list of all the [known phrases](./glossary.txt)

- **test** - Function - analysis input and returns Array of phrases

- **clean** - Function - strips non-alpha characters and returns String

  

Install:

```bash
npm install -S cliches
```



Usage:

```javascript
const cliches = require(`cliches`);
const text = `
  as "ugly as sin itself" oh ...
  and yet he was totally under her thumb`;

const result = cliches.test(text);

console.log(result.length); // 3
console.log(result); // [ 'ugly as sin', 'under (his|her) thumb']
```

