console.log('----level 1. 1.3. Review the behavior of JS----');

//This code works without all the js.files, but with them this code throws an Error "Identifier 'a' has already been declared"

const a = 10;
const b = -10;
const c = "100"
const d = "no";
const e = {
    name: "John",
};
const f = [1, 2, 3];
const h = true;

// guess the output of the following statements
console.log("#1", a + a);
console.log("#2", a + b);
console.log("#3", a + c);
console.log("#4", a + d);
console.log("#5", a + e);
console.log("#6", a + e["name"]);
console.log("#7", a + e["age"]);
console.log("#8", a + f);
console.log("#9", a + f[1]);
console.log("#10", a + h);