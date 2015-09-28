var fakeit = require('../index');


fakeit.on('complete', function(result){
	console.log(result);
});

fakeit.fromFile(__dirname + '/event.jtpl');
