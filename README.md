# clichés

/ˈkliːʃeɪ/ *noun* plural noun: **clichés**; plural noun: **cliches**

1. a phrase or opinion that is overused and betrays a lack of original thought.
   "that old cliché ‘a woman's place is in the home’"
2. BRITISH•PRINTING - a stereotype or electrotype.



> Uses regular expressions to dynamically identify and list commonly used clichés in a body of text



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



The [glossary of known phrases](./glossary.txt) is curated to use *Regular Expressions* for dynamic group matching, where other similar utilities don't. This means a single phrase can encompass multiple gender and/or possension alternatives.

**Example phrases that use RegExp groups:**

- `all (\w+) eggs in one basket`
  - all **YOUR** eggs, or 
  - all **HIS** eggs .... or 
  - all **THEIR** eggs ...
- `burst (your|my) bubble`
  - matches either **your** bubble or **my** bubble
- `ace up (his|her) sleeve`
  - matches either **his** or **her** sleeve



---



#### General purpose word groups:

If you find a missing phrase, and want to contribute to the [glossary](./glossary.txt), here are some commonly used regular expressions, for your convienience.

- replace gender specific nouns with `(his|her)` - restricted to two genders
- replace posession with `(your|my)`-  restricted to ownership
- catch a broader subject with `(\w+)` unrestricted, matches any "single continuous" word



To add or edit this list please clone the repo and submit a pull-request.

---



#### Methods and properties

- **keys** - Array - a list of first word keys

- **phrases** - Array - a list of all the [known phrases](./glossary.txt)

- **test** - Function - analyze the input String and return an Array of matched phrases

- **clean** - Function - strips non-alpha characters and returns String



---



#### Example uses:

- Twitter cliche re-tweeter
- Eleventy Cliche Counter
- Codepen Demo