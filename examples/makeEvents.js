var fakeit = require('../index');
var Solver = require('gsolver');
var extend = require('gextend');

fakeit.on('complete', function(result){
	var output = JSON.parse(result);
	var context = extend({}, output);
	var solver = new Solver();
	output = solver.solve(output, context);
	console.log(JSON.stringify(output, null, 4));
});

fakeit.fromFile(__dirname + '/event.jtpl');
