const request = require("./request.js");

// Dog
async function dog() {
   let {link: imageUrl} = await request("https://some-random-api.ml/img/dog");
   return imageUrl;
};

// Cat
async function cat() {
   let {link: imageUrl} = await request("https://some-random-api.ml/img/cat");
   return imageUrl;
};

// Panda 
async function panda() {
   let {link: imageUrl} = await request("https://some-random-api.ml/img/panda");
   return imageUrl;
};

// Red panda
async function redPanda() {
   let {link: imageUrl} = await request("https://some-random-api.ml/img/red_panda");
   return imageUrl;
};

// Bird
async function bird() {
   let {link: imageUrl} = await request("https://some-random-api.ml/img/birb");
   return imageUrl;
};

// Fox
async function fox() {
   let {link: imageUrl} = await request("https://some-random-api.ml/img/fox");
   return imageUrl;
};

// Koala 
async function koala() {
   let {link: imageUrl} = await request("https://some-random-api.ml/img/koala");
   return imageUrl;
};

// Duck
async function duck() {
   let {url: imageUrl} = await request("https://random-d.uk/api/random");
   return imageUrl;
};

// Shiba
async function shiba() {
   let imageUrl = await request("http://shibe.online/api/shibes");
   return imageUrl[0];
};

// Bunny
async function bunny() {
   let {media} = await request("https://api.bunnies.io/v2/loop/random/?media=gif,png");
   return media.gif;
};

module.exports = {
   dog, cat, panda, redPanda, bird, 
   koala, duck, shiba, bunny, fox
};