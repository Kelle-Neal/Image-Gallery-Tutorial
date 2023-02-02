const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const image = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const alts= {
    'pic1.jpg': 'Close up of a human eye.',
    'pic2.jpg': 'A rock that looks like waves.', 
    'pic3.jpg': 'Wilting purple and white pansies.', 
    'pic4.jpg': 'Ancient Egyptian drawings and hieroglyphs.',
    'pic5.jpg': 'A brown butterfly on a leaf.'
}

/* Looping through images */

for (const image of images) {
const newImage = document.createElement('img');
newImage.setAttribute('src', 'images/${image}');
newImage.setAttribute('alt', alts[image]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
});
}

/* Wiring up the Darken/Lighten button */
