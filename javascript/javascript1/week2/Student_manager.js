//Code for assignment

const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here

  if (!studentName) {
    console.log("You should write student's name!");
    return "You should write student's name!";
  } else {
    if (class07Students.length < 6) {
      if (class07Students.includes(studentName)) {
        console.log(
          "Student " + studentName + " is already added to the class 07"
        );
      } else {
        class07Students.push(studentName);
      }
    } else if (studentName.toLowerCase === "margrethe ii") {
      class07Students.push(studentName);
    } else {
      console.log("Cannot add more students to class07");
    }
  }
}

function getNumberOfStudents() {
  // You write code here

  return "There're " + class07Students.length + " students in the class";
}

addStudentToClass("");
console.log(class07Students, getNumberOfStudents());

addStudentToClass("Benjamin");
console.log(class07Students, getNumberOfStudents());

addStudentToClass("Nadiia");
console.log(class07Students, getNumberOfStudents());

addStudentToClass("Anastasia");
console.log(class07Students, getNumberOfStudents());

addStudentToClass("Derek");
console.log(class07Students, getNumberOfStudents());

addStudentToClass("Guna");
console.log(class07Students, getNumberOfStudents());

addStudentToClass("Christian");
console.log(class07Students, getNumberOfStudents());

addStudentToClass("Nort");
console.log(class07Students, getNumberOfStudents());

addStudentToClass("Margrethe II");
console.log(class07Students, getNumberOfStudents());

//Code for HTML-document

let classStudents = [];
function addStudentToClassInteractiveVersion() {
  let studentName = document.getElementById("student").value;
  if (!studentName) {
    document.getElementById("listOfStudents").innerText =
      "You must write students name";
    return "You must write student's name";
  } else {
    if (classStudents.length < 6) {
      if (classStudents.includes(studentName)) {
        document.getElementById("listOfStudents").innerText =
          "Student " + studentName + " is already added to the class";
      } else {
        classStudents.push(studentName);
        document.getElementById("listOfStudents").innerText = class07Students;
      }
    } else if (studentName === "Margrethe II") {
      if (classStudents.includes(studentName)) {
        document.getElementById("listOfStudents").innerText =
          "Student " + studentName + " is already added to the class";
      } else {
        classStudents.push(studentName);
        document.getElementById("listOfStudents").innerText = class07Students;
      }
    } else {
      document.getElementById("listOfStudents").innerText =
        "Cannot add more students to class07";
    }
  }
}

function getNumberOfStudentsInteractiveVersion() {
  document.getElementById("numberOfStudents").innerText = classStudents.length;
  return classStudents.length;
}
