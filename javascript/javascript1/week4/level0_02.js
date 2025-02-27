console.log("---level 0. 0.2. Variables & Scope---");

//declaring variables (commented for the fixing exercises)

/*const name = Nadiia;
const age = 22;
const isStudent = true;*/

//fixing code

console.log("--fixing the code--");

const name = "Alice";
const age = 16;
const country = "USA";
let message = "";
let status = "";

if (age < 18) {
  status = "minor";
} else {
  status = "adult";
}

message = `${name} is a ${status} from ${country}.`;

console.log(message); // Alice is a minor from USA.

//fixing code

console.log("--fixing the code--");

const canSee = true;
let room;

if (canSee) {
  room = "This room is not dark";
} else {
  room = "This room is pitch black";
}
console.log(room);
