const lodash = require('lodash');
let arr = [1, 2, 3];
console.log(lodash.without(arr, 3)); // [1,2]
setTimeout(() => {
    console.log(`after 2000ms`);
}, 2000);

exports.printHelloNpm = function () {
    console.log(`hello npm`);
}