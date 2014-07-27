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
    fs = require('fs'),
    util = require('util'),
    helpers = require('./helpers'),
    momentHelper = require('handlebars-helper-moment')(),
    Events = require('events').EventEmitter,
    faker = require('faker');

var extend = Handlebars.Utils.extend;

var CoreHelpers = {};

extend(CoreHelpers, faker.Date);
extend(CoreHelpers, faker.Name);
extend(CoreHelpers, faker.Image);
extend(CoreHelpers, faker.Lorem);
extend(CoreHelpers, faker.random);
extend(CoreHelpers, faker.Address);
extend(CoreHelpers, faker.Company);
extend(CoreHelpers, faker.Internet);
extend(CoreHelpers, faker.PhoneNumber);

extend(CoreHelpers, momentHelper);

extend(CoreHelpers, helpers);


var Tuxedo = function(){
    Events.call(this);
};
util.inherits(Tuxedo, Events);

Tuxedo.prototype.fromFile = function(path, options, callback) {
    options || (options = {});

    fs.readFile(path, {
        encoding: 'utf8'
    }, function(err, template) {
        if (err) {
            this.emit('error', err);
            callback && callback(err, null);
        }
        var result = this.parse(template, options.data);

        this.emit('complete', result);

        callback && callback(null, result);

    }.bind(this));
};

Tuxedo.prototype.parse = function(string, options) {
    options || (options = {});

    var mergeHelpers = {};
    Handlebars.Utils.extend(mergeHelpers, CoreHelpers);
    Handlebars.Utils.extend(mergeHelpers, options.helpers);

    // Reset indexes on each parse
    return Handlebars.compile(string)(options.data, {
        helpers: mergeHelpers
    });
};

module.exports = new Tuxedo();