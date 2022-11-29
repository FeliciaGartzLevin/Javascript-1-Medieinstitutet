/**
 * Cat of the Day
 *
 * <https://cataas.com/>
 * <https://cataas.com/cat?json=true>
 */

const getCatBtn = document.querySelector('#getCatBtn');


/* const getCatImg = async () => {
    const response = await fetch('https://cataas.com/cat?json=true')

    if(!response.ok) {
        throw new Error("Response was not OK!")
    }

    const randomCatImg = await response.json();

    // console.log(randomCatImg);

    document.querySelector('#catImg').setAttribute('src', `https://cataas.com/${randomCatImg.url}`); 
    
    //här fungerar även t ex `https://cataas.com/cat/${randomCatImg._id}`
    //jag gick in och kollade arrayens values mha console.log(randomCatImg); 
    // ovan och kan använda något av valuesen för att src:sa bilden.
}

getCatImg();
// console.log(randomCatImg); funkar ej då randomCatImg är en lokal variabel i scopet ovan

getCatBtn.addEventListener('click', () => {
    getCatImg();
}); */

// Johans lösning:

const get= async (url) => {

    const response = await fetch(url);
    if(!response.ok) {
        throw new Error(`Response was not OK! Status returned was: "${res.status} ${res.statusText}".`);
    }

    return await response.json();

    
}

const getNewCat= async () => {

    const cat = await get('https://cataas.com/cat?json=true');

    document.querySelector('#catImg').setAttribute('src', `https://cataas.com/${cat.url}`); 

}

getNewCat();

getCatBtn.addEventListener('click', () => {
    getNewCat();
});

