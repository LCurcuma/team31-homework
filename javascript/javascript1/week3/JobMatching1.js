console.log("---Job-matching 1---");

//Bonus homework #1

function match(candidate, job) {
  // is this job a valid match for the candidate?

  const maxSalary = job.maxSalary + (candidate.minSalary * 10) / 100;
  if (candidate.minSalary === undefined || job.maxSalary === undefined) {
    throw new Error(
      "Write desired maximum Salary or/and minimum Salary, that company can provide to workers"
    );
  } else if (candidate.minSalary <= maxSalary) {
    return candidate.minSalary <= maxSalary;
  } else if (candidate.minSalary > maxSalary) {
    return candidate.minSalary > maxSalary;
  }
}

let candidate = {
  minSalary: 150000,
};

let job = {
  maxSalary: 140000,
};

console.log(match(candidate, job));
