//The code, that is made for assignment

function getFullName(firstName, surname, useFormalName, isMale) {
  if (!firstName || !surname) {
    return "Write your first name and surname!";
  } else {
    if (useFormalName == true) {
      if (isMale == true) {
        return "Lord " + firstName + " " + surname;
      } else if (isMale == false) {
        return "Lady " + firstName + " " + surname;
      } else {
        return "Are you male or female?";
      }
    } else if (useFormalName == false) {
      return firstName + " " + surname;
    } else {
      return "You should check, if you want formal name";
    }
  }
}

const fullName1 = getFullName("Benjamin", "Hughes", true, true); // returns "Benjamin Hughes"
const fullName2 = getFullName("Nadiia", "Zhykharieva", true, false);
const fullName3 = getFullName("Nadiia", "Zhykharieva", false, false);
const fullName4 = getFullName("", "Zhykharieva", true, false);
const fullName5 = getFullName("Nadiia", "", true, false);
const fullName6 = getFullName("Nadiia", "Zhykharieva", null, false);
const fullName7 = getFullName("Nadiia", "Zhykharieva", true);

console.log(
  fullName1 +
    "\n" +
    fullName2 +
    "\n" +
    fullName3 +
    "\n" +
    fullName4 +
    "\n" +
    fullName5 +
    "\n" +
    fullName6 +
    "\n" +
    fullName7
);

//The code, that is used in HTML-document

function showFullNameInteractiveVersion() {
  const firstName = document.getElementById("firstname").value;
  const surname = document.getElementById("surname").value;
  console.log(
    "Your full name is: " + getFullNameInteractiveVersion(firstName, surname)
  );
  document.getElementById("fullname").innerText = getFullNameInteractiveVersion(
    firstName,
    surname
  );
}

function getFullNameInteractiveVersion() {
  const useFormalName = document.getElementById("formal-true").checked;
  const isMale = document.getElementById("male").checked;
  const noUseFormalName = document.getElementById("formal-false").checked;
  const isFemale = document.getElementById("female").checked;
  const noMale = document.getElementById("no").checked;

  if (!firstName || !surname) {
    return "You should write your name and surname!";
  } else {
    if (isMale) {
      if (useFormalName) {
        return "Lord " + firstName + " " + surname;
      } else if (noUseFormalName) {
        return firstName + " " + surname;
      } else {
        return "You should check one of the variants";
      }
    } else if (isFemale) {
      if (useFormalName) {
        return "Lady " + firstName + " " + surname;
      } else if (noUseFormalName) {
        return firstName + " " + surname;
      } else {
        return "You should check one of the variants";
      }
    } else if (noMale) {
      if (useFormalName) {
        return "Dear " + firstName + " " + surname;
      } else if (noUseFormalName) {
        return firstName + " " + surname;
      } else {
        return "You should check one of the variants";
      }
    } else {
      return "You should check one of the variants";
    }
  }
}
