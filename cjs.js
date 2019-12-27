const aCjs = require('./aCjs.js');

function funA(a, b) {
    return a + b
}

var day = aCjs.getDay();
console.log('day', day)
exports.cjs = {
    funA
}