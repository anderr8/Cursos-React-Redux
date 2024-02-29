console.log(global === this)
console.log(module === this)
console.log(module.exports === this)


// Os dois modelos funciona:


// this.digaOi = function () {
//     console.log('Oi!!!')
// }



module.exports.digaOi = function () {
    console.log('Oi!!!')
}