# purifyMe
Just keep the CSS elements that your HTML uses.

<h1>Install</h1><br>
npm install --save purify-css

<h2>Please modify the App.js file with the path to your HTML/CSS</h2><br>

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

