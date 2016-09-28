# purifyMe
Just keep the CSS elements that your HTML uses.

Install
npm install --save purify-css

Please modify the App.js file with the path to your HTML/CSS
//

var purify = require('purify-css');

purify (
[ 'yourpath.html'],
[ 'yourpath.css'],

{
output: 'new.css',
rejected:true,
info:true,
minify:false,
}

);

