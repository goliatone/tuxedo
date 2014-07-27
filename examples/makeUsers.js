var fakeit = require('../index');
var fs = require('fs');

var template = fs.readFileSync(__dirname+'/user.jtpl', "utf8");
var result = fakeit.parse(template);

console.log(result);