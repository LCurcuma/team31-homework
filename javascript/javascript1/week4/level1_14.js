console.log('----level 1. 1.4. Troubleshoot issue with grades----');

function calculateAverageGrade(students) {
    let total = 0;
    let count = 0;
    
    for (let i = 0; i < students.length; i++) {
        let grade = students[i].grade;
        
        if (grade > 0) {
            total += grade;
            count++;
        } else {
            console.log("Invalid grade for student: " + students[i].name);
        }
    }
    
    return total / count;
}

let studentsList = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: -10 },
    { name: "Charlie", grade: 85 },
    { name: "David", grade: 100 },
    { name: "Eva", grade: "A" }
];

console.log("Average grade:", calculateAverageGrade(studentsList)); 
// Expected Output: Average grade: 91.66