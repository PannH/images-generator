const request = require("./request.js");

// Anal
async function anal() {
   let {message: imageUrl, success} = await request("https://nekobot.xyz/api/image?type=anal");
   if (!success) return undefined;
   return imageUrl;
};

// 4k
async function fourk() {
   let {message: imageUrl, success} = await request("https://nekobot.xyz/api/image?type=4k");
   if (!success) return undefined;
   return imageUrl;
};

// Ass
async function ass() {
   let {message: imageUrl, success} = await request("https://nekobot.xyz/api/image?type=ass");
   if (!success) return undefined;
   return imageUrl;
};

// Porn GIF
async function pornGif() {
   let {message: imageUrl, success} = await request("https://nekobot.xyz/api/image?type=pgif");
   if (!success) return undefined;
   return imageUrl;
};

// Pussy
async function pussy() {
   let {message: imageUrl, success} = await request("https://nekobot.xyz/api/image?type=pussy");
   if (!success) return undefined;
   return imageUrl;
};

// Thigh
async function thighs() {
   let {message: imageUrl, success} = await request("https://nekobot.xyz/api/image?type=thigh");
   if (!success) return undefined;
   return imageUrl;
};

// Boobs
async function boobs() {
   let {message: imageUrl, success} = await request("https://nekobot.xyz/api/image?type=boobs");
   if (!success) return undefined;
   return imageUrl;
};

module.exports = {
   anal, fourk, ass, pornGif, pussy, thighs, boobs
};