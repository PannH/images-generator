# images-generator
#### This module allows you to manipulate or generate random images.

## 🖐️ Examples of use :
```js
// Import 'images-generator'
const gen = require("images-generator");

// Random cat image
let catImage = await gen.animal.cat();
console.log(image); // Output: https://i.some-random-api.ml/98y46WoOwX.jpg

// Random anime cuddle image
let cuddleImage = await gen.anime.cuddle();
console.log(image); // Output: https://cdn-anime-images-api.hisoka17.repl.co/images/cuddle29.gif

// Blur an image
let imageUrl = "https://static01.nyt.com/images/2019/06/17/science/17DOGS/17DOGS-mobileMasterAt3x-v2.jpg";
let blurredImage = await gen.overlay.blur({image: imageUrl});
console.log(blurredImage) // Output: https://api.popcatdev.repl.co/blur?image=https://static01.nyt.com/images/2019/06/17/science/17DOGS/17DOGS-mobileMasterAt3x-v2.jpg

// Create a Drake meme
let drakeMemeImage = await gen.misc.drake({
    text1: "Using image APIs by yourself",
    text2: "Using this NPM package"
});
console.log(drakeMemeImage); // Output: api.popcatdev.repl.co/drake?text1=Using+image+APIs+by+yourself&text2=Using+this+NPM+package

// Random anime boobs image (NSFW)
let hentaiImage = await gen.nsfw.anime.boobs();
console.log(hentaiImage); // Output: cdn-anime-images-api.hisoka17.repl.co/images/boob75.gif

// Random real ass (NSFW)
let assImage = await gen.nsfw.real.ass();
console.log(assImage); // Output: https://cdn.nekobot.xyz/b/1/a/409cf649412f5fb19586c4543d24f.jpg
```

## 💻 All methods :
> Note: In "Usage", we called the module as `gen` (`const gen = require("images-generator")`).

| 📁️ Category | 📝  Method | 🧾  Description | 📍  Usage |
| ------ | ------ | ------ | ------ |
| Animal | dog() | Returns a dog image | `await gen.animal.dog()` |
| Animal | cat() | Returns a cat image | `await gen.animal.cat()` |
| Animal | panda() | Returns a panda image | `await gen.animal.panda()` |
| Animal | redPanda() | Returns a red panda image | `await gen.animal.redPanda()` |
| Animal | bird() | Returns a bird image | `await gen.animal.bird()` |
| Animal | koala() | Returns a koala image | `await gen.animal.koala()` |
| Animal | duck() | Returns a duck image | `await gen.animal.duck()` |
| Animal | shiba() | Returns a shiba inu image | `await gen.animal.shiba()` |
| Animal | bunny() | Returns a bunny image | `await gen.animal.bunny()` | 
| Animal | fox() | Returns a fox image | `await gen.animal.fox()` |
| --- | --- | --- | --- |
| Anime | wink() | Returns an anime wink image | `await gen.anime.wink()` | 
| Anime | pat() | Returns an anime pat image | `await gen.anime.pat()` |
| Anime | hug() | Returns an anime hug image | `await gen.anime.hug()` | 
| Anime | kiss() | Returns an anime kiss image | `await gen.anime.kiss()` |
| Anime | punch() | Returns an anime punch image | `await gen.anime.punch()` | 
| Anime | slap() | Returns an anime slap image | `await gen.anime.slap()` |
| Anime | kill() | Returns an anime kill image | `await gen.anime.kill()` | 
| Anime | cuddle() | Returns an anime cuddle image | `await gen.anime.cuddle()` | 
| Anime | desktopWallpaper() | Returns an anime desktop wallpaper  | `await gen.anime.desktopWallpaper()` | 
| Anime | mobileWallpaper() | Returns an anime mobile wallpaper | `await gen.anime.mobileWallpaper()` | 
| Anime | foxGirl() | Returns an anime fox girl | `await gen.anime.foxGirl()` | 
| Anime | neko() | Returns a neko image | `await gen.anime.neko()` | 
| --- | --- | --- | --- | 
| Miscellaneous | youtubeComment(options) | Creates a YouTube comment | `await gen.misc.youtubeComment({avatar: <imageUrl>, username: <username>, content: <commentContent>})` |  
| Miscellaneous | meme() | Returns the title and the image of a meme | `await gen.misc.meme()` |  
| Miscellaneous | pooh(options) | Creates a Winnie-the-pooh meme | `await gen.misc.pooh({text1: <text1>, text2: <text2>})` |  
| Miscellaneous | drake(options) | Creates a Drake meme | `await gen.misc.drake({text1: <text1>, text2: <text2>})` |  
| Miscellaneous | relationShip(options) | Creates a relation ship image | `await gen.misc.relationShip({avatar1: <imageUrl1>, avatar2: <imageUrl2>})` |  
| Miscellaneous | bidenTweet(options) | Makes Biden tweet anything | `await gen.misc.bidenTweet({content: <tweetContent>})` |  
| Miscellaneous | suprisedPikachu(options) | Creates a surprised Pikachu meme | `await gen.misc.surprisedPikachu({content: <content>})` |  
| Miscellaneous | drip(options) | Pretends you're rich by wearing a fake jacket | `await gen.misc.drip({avatar: <imageUrl>})` |  
| Miscellaneous | clown(options) | This person is a clown | `await gen.misc.clown({avatar: <imageUrl>})`|  
| Miscellaneous | uncover(options) | He was behind the wall all the time?! | `await gen.misc.uncover({image: <imageUrl>})` |  
| Miscellaneous | pet(options) | Creates a pet-pet gif | `await gen.misc.pet({avatar: <imageUrl>})` |  
| Miscellaneous | mnm(options) | Makes your image into a M&M's shape | `await gen.misc.mnm({avatar: <imageUrl>})` |  
| Miscellaneous | jokeOverHead(options) | That guy doesn't get the joke! | `await gen.misc.jokeOverHead({avatar: <imageUrl>})` |  
| Miscellaneous | facts(options) | Writes something in the Facts Book | `await gen.misc.facts({content: <factContent>})` |  
| Miscellaneous | iphoneAlert(options) | Creates an important IPhone alert | `await gen.misc.iphoneAlert({content: <alertContent>})` | 
| Miscellaneous | caution(options) | Creates a caution banner | `await gen.misc.caution({content: <cautionContent>})` | 
| --- | --- | --- | --- |
| Overlay | gay(options) | Adds a rainbow overlay to your image | `await gen.overlay.gay({image: <imageUrl>})` |
| Overlay | glass(options) | Adds a glass overlay to your image | `await gen.overlay.glass({image: <imageUrl>})` |
| Overlay | gtaWasted(options) | Adds the 'GTA Wasted' overlay to your image | `await gen.overlay.gtaWasted({image: <imageUrl>})` |
| Overlay | triggered(options) | Adds the 'Triggered' effect to your image | `await gen.overlay.triggered({image: <imageUrl>})` |
| Overlay | colorify(options) | Colors your image with the choosen color | `await gen.overlay.colorify({image: <imageUrl>, color: <colorHexCode>})` |
| Overlay | blur(options) | Blurs your image  | `await gen.overlay.blur({image: <imageUrl>})` |
| Overlay | invert(options) | Inverts your image colors | `await gen.overlay.invert({image: <imageUrl>})` |
| Overlay | grey(options) | Grays your image | `await gen.overlay.grey({image: <imageUrl>})` |
| --- | --- | --- | --- |
| [NSFW] Real | anal() | Returns an anal image | `await gen.nsfw.real.anal()` |
| [NSFW] Real | fourk() | Returns a 4k image | `await gen.nsfw.real.fourk()` |
| [NSFW] Real | ass() | Returns an ass image | `await gen.nsfw.real.ass()` |
| [NSFW] Real | pornGif() | Returns a porn GIF | `await gen.nsfw.real.pornGif()` |
| [NSFW] Real | pussy() | Returns a pussy image | `await gen.nsfw.real.pussy()` |
| [NSFW] Real | thigh() | Returns a thighs image | `await gen.nsfw.real.thighs()` |
| [NSFW] Real | boobs() | Returns a boobs image | `await gen.nsfw.real.boobs` |
| --- | --- | --- | --- |
| [NSFW] Anime | boobs() | Returns an image of anime boobs | `await gen.nsfw.anime.boobs()` |
| [NSFW] Anime | hentai() | Returns a hentai image  | `await gen.nsfw.anime.hentai()` |
| [NSFW] Anime | lesbian() | Returns an image of lesbian porn | `await gen.nsfw.anime.lesbian()` |
| [NSFW] Anime | ass() | Returns an anime ass image | `await gen.nsfw.anime.ass()` |
| [NSFW] Anime | thighs() | Returns an image of anime thighs | `await gen.nsfw.anime.thighs()` |
| [NSFW] Anime | lewd() | Returns a lewd image | `await gen.nsfw.anime.lewd()` |
| [NSFW] Anime | feet() | Returns an image of anime feet | `await gen.nsfw.anime.feet()` |
| [NSFW] Anime | pussy() | Returns an anime pussy image | `await gen.nsfw.anime.pussy()` |
| [NSFW] Anime | tits() | Returns an image of anime tits | `await gen.nsfw.anime.tits()` |
| [NSFW] Anime | bdsm() | Returns an image of anime bdsm | `await gen.nsfw.anime.bdsm()` |
| [NSFW] Anime | cum() | Returns an image of anime cum | `await gen.nsfw.anime.cum()` |
| [NSFW] Anime | femdom() | Returns an image of anime femdom | `await gen.nsfw.anime.femdom()` |
| [NSFW] Anime | maid() | Returns an image of anime maid porn | `await gen.nsfw.anime.maid()` |
| [NSFW] Anime | orgy() | Returns an image of anime orgy | `await gen.nsfw.anime.orgy()` |
| [NSFW] Anime | panties() | Returns an anime panties image | `await gen.nsfw.anime.panties()` |
| [NSFW] Anime | blowjob() | Returns an image of anime blowjob | `await gen.nsfw.anime.blowjob()` |
| [NSFW] Anime | ugly() | Returns an image of ugly anime person porn | `await gen.nsfw.anime.ugly()` |
| [NSFW] Anime | uniform() | Returns an image of anime girl porn in uniform | `await gen.nsfw.anime.uniform()` |
| [NSFW] Anime | gangBang() | Returns an image of anime gang-bang | `await gen.nsfw.anime.gangBang()` |
| [NSFW] Anime | glasses() | Returns an image of anime girl with glasses | `await gen.nsfw.anime.glasses()` |
| [NSFW] Anime | tentacles() | Returns an image of tentacles hentai | `await gen.nsfw.anime.tentacles()` |
| [NSFW] Anime | masturbation() | Returns an image of anime masturbation | `await gen.nsfw.anime.masturbation()` |
| [NSFW] Anime | yuri() | Returns an image of yuri porn | `await gen.nsfw.anime.yuri()` |
| [NSFW] Anime | succubus() | Returns an image of succubus | `await gen.nsfw.anime.succubus()` |
| [NSFW] Anime | school() | Returns an image of sexy anime school girl | `await gen.nsfw.anime.school()` |