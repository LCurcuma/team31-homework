console.log("---item array removal---");

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
for (let i = 0; i < names.length; i++) {
  //removed "Ahmad" and wrote name of variable, that contains that name instead
  if (names[i] === nameToRemove) {
    //instead of (i, i), wrote (i, 1), so now it removes only one element
    names.splice(i, 1);
  }
}

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
