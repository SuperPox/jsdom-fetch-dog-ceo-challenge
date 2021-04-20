console.log('%c HI', 'color: firebrick')

let breeds = [];

document.addEventListener('DOMContentLoaded', function() 
{
    loadPics();
    loadBreeds();
});

// CHALLENGE 1 ///////////////

function loadPics()
{
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch (imgUrl)
    .then(res=> res.json())
    .then(results => {results.message.forEach(pic => addPic(pic))});
}

function addPic(picUrl)
{
    let container = document.querySelector('#dog-image-container');
    let newPic = document.createElement('img');
    newPic.src = picUrl
    container.appendChild(newPic)
}

// CHALLENGE 2 ///////////////

function loadBreeds()
{
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(res=>res.json())
        .then(results=> {
            breeds = Object.keys(results.message);
            populateBreedsList(breeds);
            BreedListener();
        });
}

function populateBreedsList(breeds)
{
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
}

function removeChildren(element)
{
    let child = element.lastElementChild;
    while (child)
    {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}

function BreedListener()
{
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event)
    {
        selectBreedsByLetter(event.target.value);
    });
}

function selectBreedsByLetter(letter)
{
    populateBreedsList(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreed(breed)
{
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
}

function updateColor(event)
{
    event.target.style.color = 'red';
}