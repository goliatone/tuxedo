# Tuxedo

[![Build Status](https://secure.travis-ci.org/goliatone/tuxedo.png)](http://travis-ci.org/goliatone/tuxedo)

Faker goes hipster, gets a mustache and a suit.

## Getting Started
Install the module with: `npm install tuxedo`

```javascript
var tuxedo = require('tuxedo');

tuxedo.on('complete', function(result) {
    console.log(result);
});

tuxedo.fromFile(__dirname + '/visitors.jtpl', {
    data: {
        languages: ['English', 'Spanish', 'French'],
        parties: ['democrat', 'republican', 'independent'],
        createdAt: 'Sun Jun 30 2011 03:53:23 GMT+0300 (EEST)',
        unixtimestamp: 1406416351800
    }
});
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 goliatone  
Licensed under the MIT license.

