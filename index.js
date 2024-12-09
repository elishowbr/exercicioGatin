const btn = document.querySelector('button');
const body = document.querySelector('body');

async function getCatImg() {
    const req = await fetch("https://api.thecatapi.com/v1/images/search");
    const res = await req.json();

    res.forEach(cat => {
        const catCon = document.querySelector('.img-container');
        catCon.style.backgroundImage = `url(${cat.url})`
    });

}






btn.addEventListener('click', getCatImg)
body.addEventListener('keydown', (e) => e.key == "Enter" ? getCatImg() : "")