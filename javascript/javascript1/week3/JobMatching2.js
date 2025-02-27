//I did it! This code works! But Codewars thinks, that this code doesn't work properly.
//It passed two tests ("should match candidates currently in a job location" and "should not match candidates when equity is desired, but not offered")
//It didn't passed other tests ("should match candidates desire to move to a job location" and "match-random")

console.log("---Job-matching 2---");

//Bonus homework #2

function match(job, candidates) {
  // Which of these candidates match this job?

  let candidatesForJob = [];

  if (job.equityMax === 0) {
    for (let candidate of candidates) {
      if (!candidate.desiresEquity) {
        if (job.locations.includes(candidate.currentLocation)) {
          candidatesForJob.push(candidate);
        } else if (!job.locations.includes(candidate.currentLocation)) {
          for (let location of job.locations) {
            if (candidate.desiredLocations.includes(location)) {
              candidatesForJob.push(candidate);
            }
          }
        }
      }
    }
  } else if (job.equityMax > 0) {
    for (let candidate of candidates) {
      if (candidate.desiresEquity) {
        if (job.locations.includes(candidate.currentLocation)) {
          candidatesForJob.push(candidate);
        } else {
          for (let location of job.locations) {
            if (candidate.desiredLocations.includes(location)) {
              candidatesForJob.push(candidate);
            }
          }
        }
      } else if (!candidate.desiresEquity) {
        if (job.locations.includes(candidate.currentLocation)) {
          candidatesForJob.push(candidate);
        } else {
          for (let location of job.locations) {
            if (candidate.desiredLocations.includes(location)) {
              candidatesForJob.push(candidate);
            }
          }
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

let testCandidates = [
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
let testJob1 = { equityMax: 0, locations: ["Los Angeles", "New York"] },
  testJob2 = { equityMax: 1.2, locations: ["New York", "Kentucky"] };

match(testJob1, testCandidates); //First call should return an empty array (and it does)
match(testJob2, testCandidates); //Second call should return two candidates
