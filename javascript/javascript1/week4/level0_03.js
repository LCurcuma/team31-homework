console.log("---level 0. 0.3. Data types---");

//Defining variables

const team = "team 31";
const teamNumber = 31;
const isInTheTeam = true;
const tomorrowsMentor = undefined;
const teamsCat = null;
const teamStudent = { name: "Nadiia", surname: "Zhykharieva", age: 22 };
const teamStudents = ["Yasi", "Nadiia", "Vadim"];

//checking types of variables

console.log("--types of created variables--");

console.log(typeof team);
console.log(typeof teamNumber);
console.log(typeof isInTheTeam);
console.log(typeof tomorrowsMentor);
console.log(typeof teamsCat);
console.log(typeof teamStudent);
console.log(typeof teamStudents);

//guessing output

console.log("--guessing the output--");

const a = 10;
const b = -10;
const c = "100";
const d = "no";
const e = true;
const f = false;
const g = null;

console.log("#1", a + a, typeof (a + a)); // output is "#1 20 number"

// guess the output of the following statements
console.log("#2", a + b, typeof (a + b));
console.log("#3", a + c, typeof (a + c));
console.log("#4", a + d, typeof (a + d));
console.log("#5", a + e, typeof (a + e));
console.log("#6", a + f, typeof (a + f));
console.log("#7", a + g, typeof (a + g));
