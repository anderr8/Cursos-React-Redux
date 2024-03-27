/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	// Exercício: 1
	// console.log('Webpack')


	// Exercício: 2
	// const logger = require('./logger')
	// logger.info('Usando o padrão CommonJS!')


	// Exercício: 3
	// require('./duvida')


	//Exercício: 4
	// class Pessoa {
	//     constructor(nome) {
	//         this.nome = nome
	//     }

	//     toString() {
	//         return `Pessoa: ${ this.nome }`
	//     }
	// }

	// const pessoa = new Pessoa('gigi menina  linda!!!')
	// console.log(pessoa.toString())


	// Exercício: 5
	// import Pessoa from './pessoa'

	// const pessoa = new Pessoa('gigi você é demais!!!')
	// console.log(pessoa.toString())


	// Exercício: 6 usando o operador spread ...
	// const produto = {
	//     nome: 'Caneta Bic Preta',
	//     preco: 1.90,
	//     desconto: 0.05
	// }

	// function clone(objeto) {
	//     return { ...objeto }
	// }

	// const novoProduto = clone(produto)
	// novoProduto.nome = 'Caneta Bic Azul'

	// console.log(produto, novoProduto)


	// Exercício 7
	// import 'react'

	// export default props => (
	//     <h1>Olá</h1>
	// )

	// console.log('Só irei beijar a sua BOCA GIGI menina Linda!!!')
	"use strict";

/***/ }
/******/ ]);