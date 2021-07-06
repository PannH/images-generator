const request = require("./request.js");

// Boobs
async function boobs() {
   let {url: imageUrl} = await request("https://anime-api.hisoka17.repl.co/img/nsfw/boobs");
   return imageUrl;
};

// Hentai
async function hentai() {
   let {url: imageUrl} = await request("https://anime-api.hisoka17.repl.co/img/nsfw/hentai");
   return imageUrl;
};

// Lesbian
async function lesbian() {
   let {url: imageUrl} = await request("https://anime-api.hisoka17.repl.co/img/nsfw/lesbian");
   return imageUrl;
};

// Ass
async function ass() {
   let {message: imageUrl, success} = await request("https://nekobot.xyz/api/image?type=hass");
   if (!success) return undefined;
   return imageUrl;
};

// Thigh
async function thighs() {
   let {message: imageUrl, success} = await request("https://nekobot.xyz/api/image?type=hthigh");
   if (!success) return undefined;
   return imageUrl;
};

// Lewd
async function lewd() {
   let {url: imageUrl} = await request("https://nekos.life/api/v2/img/lewd");
   return imageUrl;
};

// Feet
async function feet() {
   let {url: imageUrl} = await request("https://nekos.life/api/v2/img/feet");
   return imageUrl;
};

// Pussy
async function pussy() {
   let {url: imageUrl} = await request("https://nekos.life/api/v2/img/pussy_jpg");
   return imageUrl;
};

// Tits
async function tits() {
   let {url: imageUrl} = await request("https://nekos.life/api/v2/img/tits");
   return imageUrl;
};

// BDSM
async function bdsm() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/bdsm");
   return imageUrl;
};

// Cum
async function cum() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/cum");
   return imageUrl;
};

// Femdom
async function femdom() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/femdom");
   return imageUrl;
};

// Maid
async function maid() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/maid");
   return imageUrl;
};

// Orgy
async function orgy() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/orgy");
   return imageUrl;
};

// Panties
async function panties() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/panties");
   return imageUrl;
};

// Blowjob
async function blowjob() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/blowjob");
   return imageUrl;
};

// Ugly
async function ugly() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/uglybastard");
   return imageUrl;
};

// Uniform
async function uniform() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/uniform");
   return imageUrl;
};

// Gang bang
async function gangBang() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/gangbang");
   return imageUrl;
};

// Glasses
async function glasses() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/glasses");
   return imageUrl;
};

// Tentacles
async function tentacles() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/tentacles");
   return imageUrl;
};

// Masturbation
async function masturbation() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/masturbation");
   return imageUrl;
};

// School
async function school() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/school");
   return imageUrl;
};

// Yuri
async function yuri() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/yuri");
   return imageUrl;
};

// Succubus
async function succubus() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/succubus");
   return imageUrl;
};

module.exports = {
   boobs, hentai, lesbian, ass, thighs, lewd, feet, pussy, 
   tits, bdsm, cum, femdom, maid, orgy, panties, blowjob,
   ugly, uniform, gangBang, glasses, tentacles, masturbation,
   yuri, succubus, school
};