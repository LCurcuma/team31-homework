function showFullName(){
    console.log('Your full name is: '+ getFullName(document.getElementById('firstname').value, document.getElementById('surname').value));
    document.getElementById('fullname').innerText = getFullName(document.getElementById('firstname').value, document.getElementById('surname').value);
}

/*To make useFormalName and isName to work, just uncomment them and two fullnames with console log
and then comment all .checked
.checked are added for the work of website*/

function getFullName(firstname, surname/*, useFormalName, isMale*/){

if(document.getElementById('firstname').value === ""/*firstname === ""*/ || document.getElementById('surname').value === "" /*lastname === ""*/){
    return 'You should write your name and surname!';
} else{
    if(document.getElementById('male').checked/* isMale === true*/){
    if(document.getElementById('formal-true').checked /*useFormalName === true*/){
        return 'Lord ' + firstname + ' ' + surname;
    }
    else if(document.getElementById('formal-false').checked /*useFormalName === false*/){
        return firstname + ' ' + surname;
    }
    else{
        return 'You should check one of the variants';
    }
}
else if(document.getElementById('female').checked /*isMale === false*/){
    if(document.getElementById('formal-true').checked /*useFormalName === true*/){
        return 'Lady ' + firstname + ' ' + surname;
    }
    else if(document.getElementById('formal-false').checked /*useFormalName === false*/){
        return firstname + ' ' + surname;
    }
    else{
        return 'You should check one of the variants';
    }
}else if(document.getElementById('no').checked /*isMale === false*/){
    if(document.getElementById('formal-true').checked /*useFormalName === true*/){
        return 'Dear ' + firstname + ' ' + surname;
    }
    else if(document.getElementById('formal-false').checked /* useFormalName === false*/){
        return firstname + ' ' + surname;
    }
    else{
        return 'You should check one of the variants';
    }
}
else{
    return 'You should check one of the variants';
}
}
}



/*let fullname1 = getFullName('Benjamin', 'Hughes', true, true);
let fullname2 = getFullName('Nadiia', 'Zhykharieva', false, false);
console.log(fullname1, fullname2);*/

