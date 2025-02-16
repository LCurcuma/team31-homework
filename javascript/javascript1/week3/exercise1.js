//2
function bookPlaneTickets() {
    // draw
    console.log("Plane tickets booked");
    requestVacationDays();
    // draw
  }
  
  //5
  function bookHotel() {
    console.log("Hotel booked");
    // draw
    planItinerary();
    // draw
  }
  
  //3
  function requestVacationDays() {
    // draw
    console.log("Vacation days requested");
    // draw
  }
  
  //6
  function planItinerary() {
    console.log("Itinerary done");
    // draw
  }
  
  //1, 4, 7
  function planTrip() {
    bookPlaneTickets();
    // draw
    bookHotel();
    // draw
    console.log("Trip planned");
  }
  // draw
  planTrip();
  // draw

  /*planTrip()
  bookPlaneTickets()
  requestVacationDays()
  return to bookPlaneTickets()
  return to planTrip()
  bookHotel()
  planItinerary()
  return to bookHotel()
  return to planTrip()
  Done*/


  /*const user = {
    name: "Emil",
    age: 25,
    role: "Teacher",
    classes: ["Javascript 1", "Javascript 2"],
    hobbies: {
      favourite: "computers",
      sports: "running to class",
    },
  };
  
  console.log(user);
  
  // Add new property
  user.lastname = "Bay";
  
  console.log(user);
  
  delete user.lastname;
  
  console.log(user);
  
  console.log(user.hobbies.favourite);
  console.log({ favourite: "computers", sports: "running to class" }.favourite);
  
  function graduatedClass(student, className) {
    if (student.classes.includes(className)) return "Error";
  
    student.classes.push(className);
  }
  
  console.log(user);
  graduatedClass(user, "HTML");
  console.log(user);
  graduatedClass(user, "HTML");
  
  const newUser = {
    name: "",
    age: "",
  };
  
  var students = [];
  function addStudent(student) {
    if (student.name == null && typeof student.name === "string") return "Error";
    if (student.age == null) return "Error";
  
    students.push(student);
  }
  
  addStudent({ name: "Rahim" });
  console.log(students);
  
  // ways to access properties
  
  user.name;
  user["name"];
  
  const prop = "name";
  user[prop];
  
  user["name"] = "Maria";
  user[0] = "Hello world";
  
  console.log(user);*/