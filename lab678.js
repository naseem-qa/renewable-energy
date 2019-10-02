'use strict';

var today = new Date();


var hourNow = prompt('please, what is the time now?');
var greeting;
if (hourNow > 18 && hourNow < 24) {
  greeting = 'Good evening!';
} else if (hourNow > 12 && hourNow < 18) {
  greeting = ' Good afternoon!';
} else if (hourNow > 0 && hourNow < 12) {
  greeting = 'Good morni ng!';
} else {
}greeting = 'Welcome! ' ;
document .write( ' <h3>' + greeting + ' </ h3>');
