module.exports = {
   animal: require("./functions/animal.js"),
   anime: require("./functions/anime.js"),
   overlay: require("./functions/overlay.js"),
   misc: require("./functions/misc.js"),
   nsfw: {
      anime: require("./functions/nsfw_anime.js"),
      real: require("./functions/nsfw_real.js")
   }
};

require("images-generator");