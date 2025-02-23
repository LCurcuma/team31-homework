console.log("---Job-matching 2---");

//Bonus homework #2

function match(job, candidates) {
  // Which of these candidates match this job?

  let candidatesForJob = [];

  for (let i = 0; i < candidates.length; i++) {
    //This works
    if (candidates.equity == true && job.equityMax != 0) {
      continue;
    } else if (candidates.equity == false && job.equityMax == 0) {
      //But the if-statements to the locations don't work(
      for (let a = 0; a < job.locations.length; a++) {
        if (job.locations[a] == candidates[i].currentLocation) {
          candidatesForJob.push(candidates[i]);
        }
      }
      for (let b = 0; b < candidates[i].desiredLocations.length; b++) {
        if (job.locations[a] == candidates[i].desiredLocations[b]) {
          candidatesForJob.push(candidates[i]);
        }
      }
    } else if (candidates.equity == true && equityMax != 0) {
      for (let a = 0; a < job.locations.length; a++) {
        if (job.locations[a] == candidates[i].currentLocation) {
          candidatesForJob.push(candidates[i]);
        }
      }
      for (let b = 0; b < candidates[i].desiredLocations.length; b++) {
        if (job.locations[a] == candidates[i].desiredLocations[b]) {
          candidatesForJob.push(candidates[i]);
        }
      }
    } else if (candidates.equity == false && equityMax == 0) {
      for (let a = 0; a < job.locations.length; a++) {
        if (job.locations[a] == candidates[i].currentLocation) {
          candidatesForJob.push(candidates[i]);
        }
      }
      for (let b = 0; b < candidates[i].desiredLocations.length; b++) {
        if (job.locations[a] == candidates[i].desiredLocations[b]) {
          candidatesForJob.push(candidates[i]);
        }
      }
    }
  }

  console.log(candidatesForJob);
}

let candidates = [
  {
    desiresEquity: true,
    currentLocation: "New York",
    desiredLocations: ["San Francisco", "Los Angeles"],
  },
  {
    desiresEquity: false,
    currentLocation: "San Francisco",
    desiredLocations: ["Kentucky", "New Mexico"],
  },
];
let job1 = { equityMax: 0, locations: ["Los Angeles", "New York"] },
  job2 = { equityMax: 1.2, locations: ["New York", "Kentucky"] };

match(job1, candidates); //First call should return an empty array (and it does)
match(job2, candidates); //Second call should return two candidates
