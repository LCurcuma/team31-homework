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

function addActivity(activity, duration) {
  //Usage limit

  const limit = 5;

  if (activities.length >= limit) {
    console.log("You have reached your limit, no more smartphoning for you!");
  } else {
    let addedActivities = {};

    //I edited that string because of optional exercise, but at first it was
    //addedActivities["date"] = date;

    activities.push({
      date: today.toLocaleDateString("en-US", options),
      activity: activity,
      duration: duration,
    });
  }
}

showStatus(activities);
addActivity("Youtube", 30);

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
    let activitiesToday = 0;

    for (let i = 0; i < activities.length; i++) {
      if (activities[i].date !== today.toLocaleDateString("en-US", options)) {
        continue;
      }

      totalTime += activities[i].duration;
      activitiesToday++;
    }

    if (activitiesToday === 1) {
      console.log(
        "You have added " +
          activitiesToday +
          " activity. It amount to " +
          totalTime +
          " min. of usage"
      );
    } else if (activitiesToday > 1) {
      console.log(
        "You have added " +
          activitiesToday +
          " activities. They amount to " +
          totalTime +
          " min. of usage"
      );
    }
  }
}

showStatus(activities);
addActivity("Facebook", 20);
showStatus(activities);
addActivity("Instagram", 50);
showStatus(activities);
addActivity("Reading a book", 80);
showStatus(activities);
addActivity("Scrolling news", 10);
showStatus(activities);
addActivity("Internet-shopping", 70);
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
  let indexOfBiggestDuration = 0;
  let biggestDuration = 0;

  //removed the second loop by tracking index of the biggest duration

  for (let i = 0; i < activities.length; i++) {
    if (biggestDuration < activities[i].duration) {
      indexOfBiggestDuration = i;
      biggestDuration = activities[i].duration;
    }
  }

  console.log(
    "You have spent the most time on " +
      activities[indexOfBiggestDuration].activity +
      ": " +
      biggestDuration +
      " min"
  );
}

showTheBiggestActivity();
