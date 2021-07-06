const request = require("./request.js");
const isImageUrl = require("image-url-validator").default;

// YouTube comment
async function youtubeComment(options={}) {
   if (!options.avatar) throw new Error("NO_AVATAR_SPECIFIED: You must specify an image URL. (Read more: https://www.npmjs.com/package/images-generator)");
   if (!options.username) throw new Error("NO_USERNAME_SPECIFIED: You must specify a username. (Read more: https://www.npmjs.com/package/images-generator)");
   if (!options.content) throw new Error("NO_CONTENT_SPECIFIED: You must specify the content of the comment. (Read more: https://www.npmjs.com/package/images-generator)");
   let validImage = await isImageUrl(options.avatar);
   if (!validImage) throw new Error("INVALID_IMAGE_URL: Specified avatar is not a valid image URL. (Read more: https://www.npmjs.com/package/images-generator)");
   return `https://some-random-api.ml/canvas/youtube-comment?avatar=${options.avatar}&username=${options.username}&comment=${options.content.replace(/ +/g, "%20")}`;
};

// Meme
async function meme() {
   let meme = await request("https://api.popcatdev.repl.co/meme");
   return {title: meme.title, image: meme.image};
};

// Pooh
async function pooh(options={}) {
   if (!options.text1 || !options.text2) throw new Error("NO_TEXT_SPECIFIED: You must specify the 2 texts. (Read more: https://www.npmjs.com/package/images-generator)")
   let imageUrl = `api.popcatdev.repl.co/pooh?text1=${options.text1.replace(/ +/g, "+")}&text2=${options.text2.replace(/ +/g, "+")}`;
   return imageUrl;
};

// Drake
async function drake(options={}) {
   if (!options.text1 || !options.text2) throw new Error("NO_TEXT_SPECIFIED: You must specify the 2 texts. (Read more: https://www.npmjs.com/package/images-generator)")
   let imageUrl = `api.popcatdev.repl.co/drake?text1=${options.text1.replace(/ +/g, "+")}&text2=${options.text2.replace(/ +/g, "+")}`;
   return imageUrl;
};

// Relation ship
async function relationShip(options={}) {
   if (!options.avatar1 || options.avatar2) throw new Error("NO_IMAGE_SPECIFIED: You must specify the 2 avatars. (Read more: https://www.npmjs.com/package/images-generator)");
   let validImage1 = await isImageUrl(options.avatar1), validImage2 = await isImageUrl(options.avatar2);
   if (!validImage1 || !validImage2) throw new Error("INVALID_IMAGE_URL: One or both avatars are invalid image URLs. (Read more: https://www.npmjs.com/package/images-generator)");
   let imageUrl = `api.popcatdev.repl.co/ship?user1=${options.avatar1}&user2=${options.avatar2}`;
   return imageUrl;
};

// Biden Tweet
async function bidenTweet(options={}) {
   if (!options.content) throw new Error("NO_CONTENT_SPECIFIED: You must specify the content of the biden's tweet. (Read more: https://www.npmjs.com/package/images-generator)")
   let imageUrl = `https://api.popcatdev.repl.co/biden?text=${options.content.replace(/ +/g, "+")}`;
   return imageUrl;
};

// Surprised Pikachu
async function surprisedPikachu(options={}) {
   if (!options.content) throw new Error("NO_CONTENT_SPECIFIED: You must specify the content. (Read more: https://www.npmjs.com/package/images-generator)")
   let imageUrl = `https://api.popcatdev.repl.co/pikachu?text=${options.content.replace(/ +/g, "+")}`;
   return imageUrl;
};

// Drip
async function drip(options={}) {
   if (!options.avatar) throw new Error("NO_AVATAR_SPECIFIED: You must specify an avatar.");
   let validImage = await isImageUrl(options.avatar);
   if (!validImage) throw new Error("INVALID_IMAGE_URL: The avatar specified is not a valid image URL.");
   let imageUrl = `https://api.popcatdev.repl.co/drip?image=${options.avatar}`;
   return imageUrl;
};

// Clown
async function clown(options={}) {
   if (!options.avatar) throw new Error("NO_AVATAR_SPECIFIED: You must specify an avatar.");
   let validImage = await isImageUrl(options.avatar);
   if (!validImage) throw new Error("INVALID_IMAGE_URL: The avatar specified is not a valid image URL.");
   let imageUrl = `https://api.popcatdev.repl.co/clown?image=${options.avatar}`;
   return imageUrl;
};

// Uncover
async function uncover(options={}) {
   if (!options.image) throw new Error("NO_IMAGE_SPECIFIED: You must specify an image.");
   let validImage = await isImageUrl(options.image);
   if (!validImage) throw new Error("INVALID_IMAGE_URL: The avatar specified is not a valid image URL.");
   let imageUrl = `https://api.popcatdev.repl.co/uncover?image=${options.image}`;
   return imageUrl;
};

// Pet
async function pet(options={}) {
   if (!options.avatar) throw new Error("NO_AVATAR_SPECIFIED: You must specify an avatar.");
   let validImage = await isImageUrl(options.avatar);
   if (!validImage) throw new Error("INVALID_IMAGE_URL: The avatar specified is not a valid image URL.");
   let imageUrl = `https://api.popcatdev.repl.co/pet?image=${options.avatar}`;
   return imageUrl;
};

// M&Ms
async function mnm(options={}) {
   if (!options.avatar) throw new Error("NO_AVATAR_SPECIFIED: You must specify an avatar.");
   let validImage = await isImageUrl(options.avatar);
   if (!validImage) throw new Error("INVALID_IMAGE_URL: The avatar specified is not a valid image URL.");
   let imageUrl = `https://https://api.popcatdev.repl.co/mnm?image=${options.avatar}`;
   return imageUrl;
};

// Joke over head
async function jokeOverHead(options={}) {
   if (!options.avatar) throw new Error("NO_AVATAR_SPECIFIED: You must specify an avatar.");
   let validImage = await isImageUrl(options.avatar);
   if (!validImage) throw new Error("INVALID_IMAGE_URL: The avatar specified is not a valid image URL.");
   let imageUrl = `https://api.popcatdev.repl.co/jokeoverhead?image=${options.avatar}`;
   return imageUrl;
};

// Facts
async function facts(options={}) {
   if (!options.content) throw new Error("NO_CONTENT_SPECIFIED: You must specify the content of the facts. (Read more: https://www.npmjs.com/package/images-generator)")
   let imageUrl = `https://api.popcatdev.repl.co/facts?text=${options.content.replace(/ +/g, "+")}`;
   return imageUrl;
};

// IPhone alert
async function iphoneAlert(options={}) {
   if (!options.content) throw new Error("NO_CONTENT_SPECIFIED: You must specify the content of the facts. (Read more: https://www.npmjs.com/package/images-generator)")
   let imageUrl = `https://api.popcatdev.repl.co/alert?text=${options.content.replace(/ +/g, "+")}`;
   return imageUrl;
};

// Caution
async function caution({content}) {
   if (!content) throw new Error("NO_CONTENT_SPECIFIED: You must specify the content of the facts. (Read more: https://www.npmjs.com/package/images-generator)")
   let imageUrl = `https://api.popcatdev.repl.co/caution?text=${content.replace(/ +/g, "+")}`;
   return imageUrl;
};

module.exports = {
   youtubeComment, meme, pooh, drake, relationShip, bidenTweet,
   surprisedPikachu, drip, clown, uncover, pet, mnm,
   jokeOverHead, facts, iphoneAlert, caution
};