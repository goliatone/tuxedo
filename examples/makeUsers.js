var fakeit = require('../index');


fakeit.on('complete', function(result){
	console.log(result);
});

fakeit.fromFile(__dirname+'/user.jtpl');