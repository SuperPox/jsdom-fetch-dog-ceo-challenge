console.log('%c HI', 'color: firebrick')

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

