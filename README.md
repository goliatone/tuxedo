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

tuxedo.fromFile(__dirname + '/users.jtpl');
```

`users.jtpl`

```json
[
{{#repeat 13}}
{
  "_id":"{{uid 32}}",
  "_index":"{{autoIncrement}}",
  "name": "{{findName}}",
  "handle":"{{userName}}",
  "address": "{{streetAddress}}",
  "phone":"{{phoneNumber}}",
  "company":"{{companyName}}",
  "img":"{{avatar}}",
  "bio": "{{sentences 3}}"
}
{{/repeat}}
]
```

output:

```json
[{
  "_id":"9hwh38gcy6oap9y0l72f6hos11e63tcj",
  "_index":"1",
  "name": "Nicholas Kon",
  "handle":"danny.mclaughlin",
  "address": "288 Johnson Junctions Suite 092",
  "phone":"340-344-1635 x582",
  "company":"Pagac, Reichel and Nitzsche",
  "img":"https://s3.amazonaws.com/uifaces/faces/twitter/carlosjgsousa/128.jpg",
  "bio": "inventore ut ullam natus enim tempore dolorem aut veritatis et et id hic reprehenderit doloribus molestias quae reiciendis ad"
},
{
  "_id":"og1cj2lkjidpo76hek94jy6oy1t487bh",
  "_index":"2",
  "name": "Olen Cormier",
  "handle":"reagan",
  "address": "85346 Stamm Ford Apt. 355",
  "phone":"958-198-9556",
  "company":"Abshire and Sons",
  "img":"https://s3.amazonaws.com/uifaces/faces/twitter/ciaranr/128.jpg",
  "bio": "quis dignissimos est voluptatem quaerat alias aut nulla eos illo et repellendus distinctio odio quod quis voluptas"
},
{
  "_id":"aftmqt4ec65r8kqast80fukgnj4vgp4y",
  "_index":"3",
  "name": "Miss Camryn Wolf",
  "handle":"chyna",
  "address": "0704 Alden Roads Suite 338",
  "phone":"822-963-0852",
  "company":"Kunze-Hudson",
  "img":"https://s3.amazonaws.com/uifaces/faces/twitter/djsherman/128.jpg",
  "bio": "ea qui consectetur vel tempora dolor neque quod enim aut qui quisquam rerum ullam"
}]
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

