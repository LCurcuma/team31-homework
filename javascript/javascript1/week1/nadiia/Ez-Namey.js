function ezNamey(){

    let firstWords = ['Easy', 'Innovative', 'Smart', 'Awesome', 'Corporate', 'Tech', 'Clean', 'Fancy', 'Big', 'Massive'];
    let secondWords = ['Corporation', 'Idea', 'Site', 'Ease', 'Team', 'Group', 'Person', 'People', 'Business', 'Project'];

    let randomIndexFirstWord = Math.floor(Math.random() * 10);
    let randomIndexSecondWord = Math.floor(Math.random() * 10);

    let startupName = firstWords[randomIndexFirstWord] + " " + secondWords[randomIndexSecondWord];

    document.getElementById("randomStartupName").innerText = "The startup: \"" + startupName + "\"";
}