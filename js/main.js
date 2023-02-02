const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

//Create image array
const image = ["pic1", "pic2", "pic3", "pic4", "pic5"];

/* Declaring the alternative text for each image file */
const altText = {
    pic1: "Close up of a human eye.", 
    pic2: "A rock that looks like waves.", 
    pic3: "Wilting purple and white pansies.", 
    pic4: "Ancient Egyptian drawings and hieroglyphs.",
    pic5: "A brown butterfly on a leaf."
}

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
