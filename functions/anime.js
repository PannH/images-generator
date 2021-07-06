const request = require("./request.js");

// Wink
async function wink() {
   let {url: imageUrl} = await request("https://anime-api.hisoka17.repl.co/img/wink");
   return imageUrl;
};

// Pat
async function pat() {
   let {url: imageUrl} = await request("https://anime-api.hisoka17.repl.co/img/pat");
   return imageUrl;
};

// Hug
async function hug() {
   let {url: imageUrl} = await request("https://anime-api.hisoka17.repl.co/img/hug");
   return imageUrl;
};

// kiss
async function kiss() {
   let {url: imageUrl} = await request("https://anime-api.hisoka17.repl.co/img/kiss");
   return imageUrl;
};

// Punch
async function punch() {
   let {url: imageUrl} = await request("https://anime-api.hisoka17.repl.co/img/punch");
   return imageUrl;
};

// Slap
async function slap() {
   let {url: imageUrl} = await request("https://anime-api.hisoka17.repl.co/img/slap");
   return imageUrl;
};

// Kill
async function kill() {
   let {url: imageUrl} = await request("https://anime-api.hisoka17.repl.co/img/kill");
   return imageUrl;
};

// Cuddle
async function cuddle() {
   let {url: imageUrl} = await request("https://anime-api.hisoka17.repl.co/img/cuddle");
   return imageUrl;
};

// Desktop wallpaper
async function desktopWallpaper() {
   let {url: imageUrl} = await request("https://nekos.life/api/v2/img/wallpaper");
   return imageUrl;
};

// Mobile wallpaper
async function mobileWallpaper() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/mobileWallpapers");
   return imageUrl;
};

// FoxGirl
async function foxGirl() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/sfwfoxes");
   return imageUrl;
};

// Neko
async function neko() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/neko");
   return imageUrl;
};

module.exports = {
   wink, pat, hug, kiss, punch, slap, kill, cuddle,
   desktopWallpaper, mobileWallpaper, foxGirl, neko
};