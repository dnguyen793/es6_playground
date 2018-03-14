
// import $ from 'jQuery';
// $('#root').append('<h1>This is created using jQuery</h1>');

// const newElement = document.createElement('h1');
//
// newElement.innerText = 'This is core JS';
//
// document.getElementById("root").appendChild(newElement);

import addHeaderToDom from './helpers';
import logFunction, { add, sub, div, multi } from './math';
// import * as mathStuff from './math'; //mathStuff is an object that contains the functions

logFunction();

// addHeaderToDom('This is the new header');
// addHeaderToDom('This is another new header');

addHeaderToDom('3 + 7 = ' + add(3,7));
addHeaderToDom('10 - 5 = ' + sub(10,5));
addHeaderToDom('100 / 5 = ' + div(100, 5));
// addHeaderToDom('1000 * 0.01 = ' + multi(1000, 0.01));
addHeaderToDom(`1000 * 0.01 = ${multi(1000, 0.01)}`);

const num1 = 15;
const num2 = 0;
addHeaderToDom(`${num1} / ${num2} = ${div(num1,num2)}`);
