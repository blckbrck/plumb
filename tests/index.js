const assert = require("assert");
const myModule = require("..");
assert.equal(typeof myModule.pixelmatch, 'function');
console.log("ok");
