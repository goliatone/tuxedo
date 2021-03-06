'use strict';

var Solver = require('gsolver');

/* jshint strict: false, plusplus: true */
/*global define: false, require: false, module: false, exports: false */
var randomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var randomFloat = function(min, max) {
    return Math.random() * (max - min) + min;
};

var randomBoolean = function() {
    return Math.random() > 0.5;
};

var zeroPad = function(num, len) {
    num = num + '';
    while (num.length < len) {
        num = '0' + num;
    }
    return num;
}

var indices = {};

var helpers = {
    repeat: function(min, max, options) {
        // By default repeat will work with it's current context, unless it's
        // given an array in which case it'll work with that
        var context = this;
        var contextIsArray = false;
        var count = 0;

        if (Array.isArray(min)) {
            // If the helper was given an array then juggle the arguments
            options = max;
            context = min;
            count = context.length;
            contextIsArray = true;
        } else {
            if (arguments.length === 3) {
                // If given two numbers then pick a random one between the two
                count = randomInt(min, max);
            } else if (arguments.length === 2) {
                // If given one number then just use it as a fixed repeat count
                options = max;
                count = min;
            }
        }

        var ret = '';
        for (var i = 0; i < count; i++) {
            // index and count are passed as private variables so they don't pollute
            // the context scope
            ret += options.fn(
                contextIsArray ? context[i] : context, {
                    data: {
                        index: i,
                        count: count
                    }
                }
            );
            // Trim whitespace left by handlebars and add commas between items
            ret = ret.trim();
            if (i < count - 1) ret += ',';
        }

        return ret;
    },
    repeatIndex: function(options) {
        // Outside of a repeat loop this will return undefined
        return options.data.index;
    },
    repeatCount:function(options){
        return options.data.count;
    },

    boolean: function(options) {
        return randomBoolean().toString();
    },
    number: function(min, max, options) {
        options = options || {};
        // If only one number is provided then generate from 0 to that number
        if (arguments.length === 2) {
            options = max;
            max = min;
            min = 0;
        }

        // Handlebars helpers don't accept numbers with decimal places as arguments
        // so floats must be passed as strings
        var isFloat = false;
        if (typeof min === 'string') {
            isFloat = true;
            min = parseFloat(min);
            max = parseFloat(max);
        }

        if (isFloat) {
            return randomFloat(min, max);
        } else {
            var n = randomInt(min, max);
            // Integers can optionally be padded with leading zeros
            if(typeof options === 'object' && typeof options.hash === 'object') return options.hash.pad ? zeroPad(n, max.toString().length) : n;
            return n;
        }
    },

    uid: function(len) {
        len = len || 32;
        return Math.random().toString(35).substr(2, len);
    },
    autoIncrement: function(id, count) {
        count = isNaN(count) ? 0 : count;
        if (!indices.hasOwnProperty(id)) indices[id] = count;
        return ++indices[id];
    },
    mac: function(prefix) {
        var mac = prefix || '54:52:00';

        for (var i = 0; i < 6; i++) {
            if (i % 2 === 0) mac += ':';
            mac += Math.floor(Math.random() * 16).toString(16);
        }

        return mac;
    }
};

module.exports = helpers;
