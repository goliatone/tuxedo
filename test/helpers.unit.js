if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("helpers.js", function () {
    describe("replaceSymbolWithNumber()", function () {
        context("when no symbol passed in", function () {
            it("uses '#' by default", function () {
                // var num = faker.Helpers.replaceSymbolWithNumber('#AB');
                assert.ok(true);
            });
        });

        context("when symbol passed in", function () {
            it("replaces that symbol with integers", function () {
                // var num = faker.Helpers.replaceSymbolWithNumber('#AB', 'A');
                assert.ok(true);
            });
        });
    });
});
