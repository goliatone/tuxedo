var fakeit = require('../index');
var fs = require('fs');

var template = fs.readFileSync(__dirname+'/dates.jtpl', "utf8");
var result = fakeit.parse(template, {
	data:{
		createdAt: new Date("Sun Jun 30 2011 01:53:23 GMT+0300 (EEST)"),
		unixtimestamp:1406416351800
	}
});

console.log(result);