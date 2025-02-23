console.log("---NOnoN0nOYes---");

//Save a note

let notes = [];

function saveNote(content, id) {
  //here were empty object and new keys, but I removed them and just pushed the objects, as were suggested
  notes.push({ content: content, id: id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

//Get a note

function getNote(id) {
  //Now it's checking, if id is Number or not
  if (!Number.isInteger(id)) {
    //This returns error message and not an error
    return "You should write an id";
  } else {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        return notes[i];
      }
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

//Log out notes

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      "The note with id: " +
        notes[i].id +
        ', has the following note text: "' +
        notes[i].content +
        '"'
    );
  }
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

//Unique feature

function randomNote() {
  const lastNumberOfArray = notes.length - 1;
  const number = Math.round(
    Math.random() * (notes[lastNumberOfArray].id - notes[0].id)
  );
  console.log("The random id: " + (number + 1));
  console.log(
    "The note with id: " +
      notes[number].id +
      ' , has the following note text: "' +
      notes[number].content +
      '"'
  );
}

randomNote();
