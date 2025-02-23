console.log("---CactusIO-interactive---");

//Adding an activity

let activities = [];
const today = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

function addActivity(date, activity, duration) {
  //Usage limit

  const limit = 5;

  if (activities.length >= limit) {
    console.log("You have reached your limit, no more smartphoning for you!");
  } else {
    let addedActivities = {};

    console.log(today.toLocaleDateString("en-US", options));

    //I edited that string because of optional exercise, but at first it was
    //addedActivities["date"] = date;

    addedActivities["date"] = today.toLocaleDateString("en-US", options);
    addedActivities["activity"] = activity;
    addedActivities["duration"] = duration;

    activities.push(addedActivities);
    console.log(addedActivities["date"]);
  }
}

showStatus(activities);
addActivity("23/7-18", "Youtube", 30);

/*
activities should now look like this
[{
    date: '23/7-18',
    activity: 'Youtube',
    duration: 30,
}]
*/

//Show my status

function showStatus(activities) {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
  } else {
    let totalTime = 0;
    let activitiesLength = 0;

    for (let i = 0; i < activities.length; i++) {
      if (activities[i].date !== today.toLocaleDateString("en-US", options)) {
        continue;
      }

      totalTime += activities[i].duration;
      activitiesLength++;
    }

    if (activitiesLength === 1) {
      console.log(
        "You have added " +
          activitiesLength +
          " activity. It amount to " +
          totalTime +
          " min. of usage"
      );
    } else {
      console.log(
        "You have added " +
          activitiesLength +
          " activities. They amount to " +
          totalTime +
          " min. of usage"
      );
    }
  }
}

showStatus(activities);
addActivity("18/2-25", "Facebook", 20);
showStatus(activities);
addActivity("18/2-25", "Instagram", 50);
showStatus(activities);
addActivity("18/2-25", "Reading a book", 80);
showStatus(activities);
addActivity("18/2-25", "Scrolling news", 10);
showStatus(activities);
addActivity("18/2-25", "Internet-shopping", 70);
showStatus(activities);

//Extra feature

function giveIdeaForWhatToDo() {
  const someActivities = [
    "learn JavaScript",
    "learn HTML",
    "learn CSS",
    "read something",
    "sleep",
    "play some games",
    "write poem",
    "go shopping",
    "go for a walk",
    "watch something",
    "do sports",
  ];

  const randomIndex = Math.floor(Math.random() * someActivities.length);
  console.log(randomIndex);
  console.log("You can " + someActivities[randomIndex]);
}

giveIdeaForWhatToDo();

//Calculating the activity a user has spent the most time on

function showTheBiggestActivity() {
  let biggestDuration = 0;

  for (let i = 0; i < activities.length; i++) {
    if (biggestDuration < activities[i].duration) {
      biggestDuration = activities[i].duration;
    }
  }

  for (let i = 0; i < activities.length; i++) {
    if (activities[i].duration === biggestDuration) {
      console.log(
        "You have spent the most time on " +
          activities[i].activity +
          ": " +
          biggestDuration +
          " min"
      );
    }
  }
}

showTheBiggestActivity();
