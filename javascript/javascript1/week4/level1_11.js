console.log('----level 1----');
console.log('---level 1. 1.1. Implement Student Grades---');

console.log('--Creating Student Objects--');

function createStudent(name, age){

    let student = {
        name: name,
        age: age,
        grades: [],
        addGrade: function (newGrade){
            this.grades.push(newGrade);
        }
    }

    return student;
}

function addGrade(students, indexOfStudent, newGrade){
    let student = students[indexOfStudent];
    student['grades'].push(newGrade);
}

console.log(createStudent('Nadiia', 22));


console.log('--Storing Students in an Array--');

let students = [];


students.push(createStudent('Nadiia', 22));
students.push(createStudent('Benjamin', 18));
students.push(createStudent('Anastasiia', 22));

students[0].addGrade(10);
students[0].addGrade(8);
students[0].addGrade(9);
students[1].addGrade(8);
students[1].addGrade(8);
students[1].addGrade(8);
students[2].addGrade(10);
students[2].addGrade(10);
students[2].addGrade(9);

console.log(students);

console.log('--Calculating Average Grade--');

function calculateAverageGrade(student){
    let sum = 0;
    let gradesList = student.grades;

    for(let grade of gradesList){
        sum += grade;
    }

    let averageGrade= sum / gradesList.length;

    return averageGrade;
}

console.log(calculateAverageGrade(students[0]));
console.log(calculateAverageGrade(students[1]));
console.log(calculateAverageGrade(students[2]));

console.log('--returning the student with the highest average grade--');

function findTopStudent(students){
    let topAverageGrade = 0;
    let topStudent = '';

    for(let student of students){
        let averageGrade = calculateAverageGrade(student);
        if(averageGrade > topAverageGrade){
            topAverageGrade = averageGrade;
            topStudent = student.name;
        }
        }
        return topStudent;
    }

console.log(findTopStudent(students));

console.log('--displaying information about student--');

function displayStudentInfo(student){
    console.log(student.name + ', Age: ' + student.age + ', Average Grade: ' + calculateAverageGrade(student));
}

for(let student of students){
    displayStudentInfo(student);
}

console.log('--testing result--')

let testStudents = [];

testStudents.push(createStudent('Allan', 20));
testStudents[0].addGrade(10);
testStudents[0].addGrade(10);
testStudents[0].addGrade(7);
testStudents[0].addGrade(4);
testStudents[0].addGrade(7);

console.log(testStudents);

testStudents.push(createStudent('Betty', 22));
testStudents[1].addGrade(12);
addGrade(1, 7);
addGrade(1, 7);
addGrade(1, 4);
addGrade(1, 2);

testStudents.push(createStudent('Charlie', 21));
addGrade(2, 10);
addGrade(2, 7);
addGrade(2, 4);
addGrade(2, 2);
addGrade(2, 0);

testStudents.push(createStudent('David', 23));
addGrade(3, 7);
addGrade(3, 4);
addGrade(3, 2);
addGrade(3, 0);
addGrade(3, -3);

testStudents.push(createStudent('Eva', 20));
addGrade(4, 12);
addGrade(4, 7);
addGrade(4, 10);
addGrade(4, 2);
addGrade(4, 12);

testStudents.push(createStudent('Grace', 22));
addGrade(5, 7);
addGrade(5, 10);
addGrade(5, 7);
addGrade(5, 10);
addGrade(5, 7);

testStudents.push(createStudent('Henry', 21));
addGrade(6, 4);
addGrade(6, 7);
addGrade(6, 7);
addGrade(6, 4);
addGrade(6, 4);

testStudents.push(createStudent('Irene', 23));
addGrade(7, 2);
addGrade(7, 7);
addGrade(7, 7);
addGrade(7, 4);
addGrade(7, 0);

console.log('Frank\'s average grade' + calculateAverageGrade(testStudents[4]));
