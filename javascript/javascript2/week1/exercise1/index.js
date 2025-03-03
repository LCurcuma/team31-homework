const h1_1 = document.createElement('h1');
h1_1.innerText = 'Favourite dishes';
document.body.appendChild(h1_1);

const favoriteDishes = ['musaka', 'chicken', 'ash', 'pizza'];

const ul = document.createElement('ul');

favoriteDishes.forEach(function(dish) {
    const li = document.createElement('li');
    li.innerText = dish;
    ul.appendChild(li);
});
//it's mandatory to have this, because it "pushes" ul to the body, that wasn't there
document.body.appendChild(ul);

const h1_2 = document.createElement('h1');
h1_2.innerText = 'Podcast';
document.body.appendChild(h1_2);

const podcasts = [{
    name: 'The mystery om of Johan Klausen Varbourg',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Tips about dogs with small legs',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'You, me, we and us',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Breakfast news - Dinner edition'
}
];

const ul2 = document.createElement('ul');

podcasts.forEach(function (podcast){
    const list = document.createElement('li');
    const h1ForLi = document.createElement('h1');
    h1ForLi.innerHTML = podcast.name;
    list.appendChild(h1ForLi);

    if(podcast.imageUrl){
        insertImageToThePage(podcast.imageUrl, list);
    }

    ul2.appendChild(list);
});

document.body.appendChild(ul2);

const h1_3 = document.createElement('h1');
h1_3.innerText = "Image inserter";
document.body.appendChild(h1_3);

function insertImageToThePage(imageUrl, elementToAppendTo){
    const img = document.createElement('img');
    img.setAttribute('src', imageUrl);
    elementToAppendTo.appendChild(img);
};

// Should append a img tag to the body with the picture from 'https://picsum.photos/536/354'
insertImageToThePage('https://picsum.photos/536/354', document.querySelector('body'));

const h1_4 = document.createElement('h1');
h1_4.innerText = 'Simple eventlistener + dark and light modes';
document.body.appendChild(h1_4);

const button = document.createElement('button');
button.innerText = 'Change mode';
document.body.appendChild(button);

button.addEventListener("click", function(){
    console.log(document.body.style.backgroundColor);
    if(document.body.classList.contains('white')){
        document.body.classList.replace('white', 'black');
        button.innerText = "You're in dark mode";
    } else {
        document.body.classList.replace('black', 'white');
        button.innerText = "You're in light mode";
    }
});
