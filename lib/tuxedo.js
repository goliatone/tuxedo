/*
 * tuxedo
 * https://github.com/goliatone/tuxedo
 * Created with gbase.
 * Copyright (c) 2014 goliatone
 * Licensed under the MIT license.
 */
/* jshint strict: false, plusplus: true */
/*global define: false, require: false, module: false, exports: false */
var Handlebars = require('handlebars'),
    helpers = require('./helpers'),
    momentHelper = require('handlebars-helper-moment')(),
    faker = require('faker');

// Merge the built-in helpers with any that are passed in the options
var CoreHelpers = {};

Handlebars.Utils.extend(CoreHelpers, faker.Date);
Handlebars.Utils.extend(CoreHelpers, faker.Name);
Handlebars.Utils.extend(CoreHelpers, faker.Image);
Handlebars.Utils.extend(CoreHelpers, faker.Lorem);
Handlebars.Utils.extend(CoreHelpers, faker.random);
Handlebars.Utils.extend(CoreHelpers, faker.Address);
Handlebars.Utils.extend(CoreHelpers, faker.Company);
Handlebars.Utils.extend(CoreHelpers, faker.Internet);
Handlebars.Utils.extend(CoreHelpers, faker.PhoneNumber);

Handlebars.Utils.extend(CoreHelpers, momentHelper);

Handlebars.Utils.extend(CoreHelpers, helpers);

module.exports = {
    parse: function(string, options) {
        options = options || {};

        var mergeHelpers = {};
        Handlebars.Utils.extend(mergeHelpers, CoreHelpers);
        Handlebars.Utils.extend(mergeHelpers, options.helpers);

        // Reset indexes on each parse
        return Handlebars.compile(string)(options.data, {
            helpers: mergeHelpers
        });
    }
};