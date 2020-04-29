const db = require('./db');
const _ = require('lodash'); //full lodash

// === Using lodash compare two object
let object = { 'a': 1 };
let other = { 'a': 1 };
// console.log(_.isEqual(object, other));
// === Using lodash to clone deep

// === Get numbers of posts
let countPost = db.get('posts').size().value();
// console.log(countPro);

// === Get numbers of cart using lodash
// let countCart = _.reduce(db.get('cart').value(), function(result, value, key) {
// 	result = result + value;
// 	return result;
// }, 0);

// === Get numbers of cart using Object.values of JS
let countCart = Object.values(db.get('cart').value()).reduce((result, cur) => {
	return result + cur;
});
console.log(countCart);

