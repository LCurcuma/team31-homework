console.log("---when will we be there---");

const travelInformation = {
  speed: 50,
  destinationDistance: 4329,
};

function timeForTravel(travelInformation) {
  let travelHours =
    travelInformation.destinationDistance / travelInformation.speed;
  //instead of repeating "travelInformation.destinationDistance / travelInformation.speed" just inserted "travelHours"
  let travelMinutes = (travelHours - parseInt(travelHours, 10)) * 60;
  if (travelHours >= 24) {
    let travelDays = travelHours / 24;
    travelHours = travelHours - parseInt(travelDays) * 24;
    return (
      parseInt(travelDays, 10) +
      " days " +
      parseInt(travelHours, 10) +
      " hours " +
      parseInt(travelMinutes, 10) +
      " minutes"
    );
  }
  return (
    parseInt(travelHours, 10) +
    " hours " +
    parseInt(travelMinutes, 10) +
    " minutes"
  );
}

const travelTime = timeForTravel(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
