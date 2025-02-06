function ezNamey(){

    let firstWords = ['Easy', 'Innovative', 'Smart', 'Awesome', 'Corporate', 'Tech', 'Clean', 'Fancy', 'Big', 'Massive'];
    let secondWords = ['Corporation', 'Idea', 'Site', 'Ease', 'Team', 'Group', 'Person', 'People', 'Business', 'Project'];

    let startupName = firstWords[getRandomIndex()] + " " + secondWords[getRandomIndex()];

    document.getElementById("randomStartupName").innerText = "The startup: \"" + startupName + "\"";
    console.log(startupName);
}

function getRandomIndex(){
    return Math.floor(Math.random() * 10);
}