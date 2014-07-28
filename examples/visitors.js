var fakeit = require('../index');


fakeit.on('complete', function(result) {
    console.log(result);
});

fakeit.fromFile(__dirname + '/visitors.jtpl', {
    data: {
        languages: ['English', 'Spanish', 'French'],
        parties: ['democrat', 'republican', 'independent'],
        createdAt: 'Sun Jun 30 2011 03:53:23 GMT+0300 (EEST)',
        unixtimestamp: 1406416351800
    }
});