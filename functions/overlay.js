const isImageUrl = require("image-url-validator").default;

// Gay
async function gay(options={}) {
   if (!options.image) throw new Error("NO_IMAGE_SPECIFIED: You must specify an image URL. (Read more: https://www.npmjs.com/package/images-generator)");
   let validImage = await isImageUrl(options.image);
   if (!validImage) throw new Error("INVALID_IMAGE_URL: Specified image is not a valid URL. (Read more: https://www.npmjs.com/package/images-generator)");
   return `https://some-random-api.ml/canvas/gay?avatar=${options.image}`;
};

// Glass
async function glass(options={}) {
   if (!options.image) throw new Error("NO_IMAGE_SPECIFIED: You must specify an image URL. (Read more: https://www.npmjs.com/package/images-generator)");
   let validImage = await isImageUrl(options.image);
   if (!validImage) throw new Error("INVALID_IMAGE_URL: Specified image is not a valid URL. (Read more: https://www.npmjs.com/package/images-generator)");
   return `https://some-random-api.ml/canvas/glass?avatar=${options.image}`;
};

// GTA Wasted
async function gtaWasted(options={}) {
   if (!options.image) throw new Error("NO_IMAGE_SPECIFIED: You must specify an image URL. (Read more: https://www.npmjs.com/package/images-generator)");
   let validImage = await isImageUrl(options.image);
   if (!validImage) throw new Error("INVALID_IMAGE_URL: Specified image is not a valid URL. (Read more: https://www.npmjs.com/package/images-generator)");
   return `https://some-random-api.ml/canvas/wasted?avatar=${options.image}`;
};

// Triggered
async function triggered(options={}) {
   if (!options.image) throw new Error("NO_IMAGE_SPECIFIED: You must specify an image URL. (Read more: https://www.npmjs.com/package/images-generator)");
   let validImage = await isImageUrl(options.image);
   if (!validImage) throw new Error("INVALID_IMAGE_URL: Specified image is not a valid URL. (Read more: https://www.npmjs.com/package/images-generator)");
   return `https://some-random-api.ml/canvas/triggered?avatar=${options.image}`;
};

// Colorify
async function colorify(options={}) {
   const isHexColor = require("is-hexcolor");
   if (!options.image) throw new Error("NO_IMAGE_SPECIFIED: You must specifiy an image URL.");
   if (!options.color) throw new Error("NO_COLOR_SPECIFIED: You must specify a HEX code of a color.");
   let validImage = await isImageUrl(options.image);
   if (!validImage) throw new Error("INVALID_IMAGE_URL: The specified image is an invalid image URL.");
   if (!isHexColor(options.color.replace("#", ""))) throw new Error("INVALID_HEX_COLOR: The specified color is an invalid color HEX code.");
   let imageUrl = `https://api.popcatdev.repl.co/colorify?image=${options.image}&color=${options.color.replace("#", "")}`;
   return imageUrl;
};

// Blur
async function blur(options={}) {
   if (!options.image) throw new Error("NO_AVATAR_SPECIFIED: You must specify an image.");
   let validImage = await isImageUrl(options.image);
   if (!validImage) throw new Error("INVALID_IMAGE_URL: The avatar specified is not a valid image URL.");
   let imageUrl = `https://api.popcatdev.repl.co/blur?image=${options.image}`;
   return imageUrl;
};

// Invert
async function invert(options={}) {
   if (!options.image) throw new Error("NO_IMAGE_SPECIFIED: You must specify an image.");
   let validImage = await isImageUrl(options.image);
   if (!validImage) throw new Error("INVALID_IMAGE_URL: The avatar specified is not a valid image URL.");
   let imageUrl = `https://api.popcatdev.repl.co/invert?image=${options.image}`;
   return imageUrl;
};

// Grey
async function grey(options={}) {
   if (!options.image) throw new Error("NO_IMAGE_SPECIFIED: You must specify an image.");
   let validImage = await isImageUrl(options.image);
   if (!validImage) throw new Error("INVALID_IMAGE_URL: The avatar specified is not a valid image URL.");
   let imageUrl = `https://api.popcatdev.repl.co/greyscale?image=${options.image}`;
   return imageUrl;
};

module.exports = {
   gay, glass, gtaWasted, triggered, colorify, blur,
   invert, grey
};