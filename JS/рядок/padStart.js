'use strict'

function maskify(cc) {
let a = cc.slice(-4).padStart(cc.length, '#');	//===	############3333

let b = cc.slice(12).padStart(cc.length, '#');	//=== ############3333

let c = cc.padStart(20, '#'); //=== ####1111222244443333

}


var cc = '1111222244443333';

console.log(maskify(cc));