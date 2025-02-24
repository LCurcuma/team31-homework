console.log('---level 0. 0.7. Objects---');

let book = {
    title: 'Warriors',
    author: 'Erin Hunter',
    yearPublished: 2003
}

console.log('--taking a book object and showing string with properties of book--');

function showingBooksData(book){
    return book.title + ' by ' + book.author + ', published in ' + book.yearPublished;
}

console.log(showingBooksData(book));

console.log('--adding method getAge to the book object--');

function getAge(book){
    const yearPublished = book.yearPublished;
    const currentYear = new Date().getFullYear();

    let age = currentYear - yearPublished;
    
    return age;
}

book.age = getAge(book);

console.log(book);

console.log('--writing a function, that returns an array of all book titles--');

function showArrayOfTitles(arrayOfBooks){
    let arrayOfTitles = [];

    for(let book of arrayOfBooks){
        arrayOfTitles.push(book.title);
    }

    return arrayOfTitles;
}

const arrayOfBooks = [
    {
        title: 'Dramatic love album',
        author: 'NAKAMURA Yoshiki',
        yearPublished: 2002,
        status: 'finished'
    },
    {
        title: 'Meitantei Conan: Tengoku e no Countdown',
        author: 'Gosho Aoyama & ABE Yutaka',
        yearPublished: 2016,
        status: 'finished'
    },
    {
        title: 'son an-ui neo',
        author: 'Daum',
        yearPublished: 2020,
        status: 'unfinished'
    },
    {
        title: 'Under the same sky',
        author: 'giullia',
        yearPublished: 2022,
        status: 'finished'
    },
    {
        title: 'D.Gray-man',
        author: 'HOSHINO Katsura',
        yearPublished: 2004,
        status: 'unfinished'
    }
];

console.log(showArrayOfTitles(arrayOfBooks));