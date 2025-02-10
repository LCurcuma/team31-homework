let class07Students = [];
function addStudentToClass(/*studentName*/) {
    let studentName = document.getElementById('student').value;
    if (studentName === ""){
        document.getElementById('listOfStudents').innerText = 'You must write students name';
        console.log('You must write students name');
    }
    else{
    if(class07Students.length < 6){
            if (class07Students.includes(studentName)){
        document.getElementById('listOfStudents').innerText = 'Student ' + studentName + ' is already added to the class';
        console.log('Student ' + studentName + ' is already added to the class');
            }
            else{
        class07Students.push(studentName);
        document.getElementById('listOfStudents').innerText = class07Students;
        console.log(class07Students);
    }
    }
    else if (studentName === 'Margrethe II'){
        
            if (class07Students.includes(studentName)){
        document.getElementById('listOfStudents').innerText = 'Student ' + studentName + ' is already added to the class';
                console.log('Student ' + studentName + ' is already added to the class');
            }
            else{
        class07Students.push(studentName);
    document.getElementById('listOfStudents').innerText = class07Students;
    console.log(class07Students);
    }
    }
    else {
        document.getElementById('listOfStudents').innerText = 'Cannot add more students to class07';
        console.log('Cannot add more students to class07');
    }
}
}

function getNumberOfStudents(){
    document.getElementById('numberOfStudents').innerText = class07Students.length;
    return class07Students.length;
}