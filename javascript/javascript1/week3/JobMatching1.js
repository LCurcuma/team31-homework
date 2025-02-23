console.log("---Job-matching 1---");

//Bonus homework #1

function match(candidate, job) {
  // is this job a valid match for the candidate?

  const maxSalary = job.maxSalary + (candidate.minSalary * 10) / 100;
  if (candidate.minSalary === undefined) {
    throw Error;
  } else if (job.maxSalary === undefined) {
    throw Error;
  } else if (candidate.minSalary <= maxSalary) {
    return true;
  } else if (candidate.minSalary >= maxSalary) {
    return false;
  }
}

let candidate = {
  minSalary: 150000,
};

let job = {
  maxSalary: 140000,
};

console.log(match(candidate, job));
