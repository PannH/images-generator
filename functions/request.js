const fetch = require("node-fetch");

async function request(url) {
   let response;
   await fetch(url).then(res => res.json()).then(json => response = json);
   return response;
};

module.exports = request;