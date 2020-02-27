const myModule = require('./index');

console.log('myModule.pixelmatch')
console.log(myModule.pixelmatch)

const myOptions = new myModule.Options(
    0.1,         // matching threshold (0 to 1); smaller is more sensitive
    false,       // whether to skip anti-aliasing detection
    0.1,             // opacity of original image in diff ouput
    new myModule.Rgb(255, 255, 0), // color of anti-aliased pixels in diff output
    new myModule.Rgb(255, 0, 0),  // color of different pixels in diff output
    false         // draw the diff over a transparent background (a mask)

)
console.log(myOptions)
console.log(myOptions.threshold)

