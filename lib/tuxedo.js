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
    faker = require('faker');

module.exports = {
    parse: function(string, options) {
        options = options || {};

        // Merge the built-in helpers with any that are passed in the options
        var combinedHelpers = {};
        Handlebars.Utils.extend(combinedHelpers, helpers);

        Handlebars.Utils.extend(combinedHelpers, faker.Date);
        Handlebars.Utils.extend(combinedHelpers, faker.Name);
        Handlebars.Utils.extend(combinedHelpers, faker.Image);
        Handlebars.Utils.extend(combinedHelpers, faker.Lorem);
        Handlebars.Utils.extend(combinedHelpers, faker.Address);
        Handlebars.Utils.extend(combinedHelpers, faker.Company);
        Handlebars.Utils.extend(combinedHelpers, faker.Internet);
        Handlebars.Utils.extend(combinedHelpers, faker.PhoneNumber);

        Handlebars.Utils.extend(combinedHelpers, require('handlebars-helper-moment')());
        Handlebars.Utils.extend(combinedHelpers, options.helpers);

        // Reset indexes on each parse
        return Handlebars.compile(string)(options.data, {
            helpers: combinedHelpers
        });
    }
};