//

var purify = require('purify-css');

purify (
[ 'index.html'],
[ 'main.css'],

{
output: 'new.css',
rejected:true,
info:true,
minify:false,
}

);
