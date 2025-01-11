// console.log(arguments);
//wrapper fxn
// console.log(require("module").wrapper);

//module.exports
const Compute = require("./test-module-1");

const calc1 = new Compute();
console.log(calc1.multiply(5, 4));

//exports

// const calc2 = require("./test-module-2");
// console.log(calc2.add(5, 4));
const { add, multiply, divide } = require("./test-module-2");
console.log(add(5, 4));

//caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
