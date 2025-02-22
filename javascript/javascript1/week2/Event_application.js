//Code for assignment

function getEventWeekday(daysLeft) {
  const now = new Date();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const todaysWeekday = now.getDay();

  let eventsDay = (todaysWeekday + daysLeft) % 7;

  return daysOfWeek[eventsDay];
}

// With todays weekday a tuesday
console.log(getEventWeekday(9)); // Logs out "Thursday"

// With todays weekday a Friday
console.log(getEventWeekday(2)); // Logs out "Sunday"

//Code for HTML-document

function getEventWeekdayInteractiveVersion() {
  const daysLeft = parseInt(document.getElementById("days-to-event").value, 10);

  const now = new Date();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const todaysWeekday = now.getDay();

  let eventsDay = (todaysWeekday + daysLeft) % 7;

  document.getElementById("eventsDay").innerText =
    "Event will be on " + daysOfWeek[eventsDay];
  console.log(todaysWeekday, daysOfWeek[eventsDay]);
}

//getEventWeekday(9);
//getEventWeekday(2);
