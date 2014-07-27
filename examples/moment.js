var fakeit = require('../index');


fakeit.on('complete', function(result){
	console.log(result);
});

fakeit.fromFile(__dirname+'/dates.jtpl', {
	data:{
		createdAt: new Date("Sun Jun 30 2011 01:53:23 GMT+0300 (EEST)"),
		unixtimestamp:1406416351800
	}
});