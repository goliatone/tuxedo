/*global define:true, describe:true , it:true , expect:true, 
beforeEach:true, sinon:true, spyOn:true , expect:true */
/* jshint strict: false */
define(['tuxedo', 'jquery'], function(Tuxedo, $) {

    describe('just checking', function() {

        it('Tuxedo should be loaded', function() {
            expect(Tuxedo).toBeTruthy();
            var tuxedo = new Tuxedo();
            expect(tuxedo).toBeTruthy();
        });

        it('Tuxedo should initialize', function() {
            var tuxedo = new Tuxedo();
            var output   = tuxedo.init();
            var expected = 'This is just a stub!';
            expect(output).toEqual(expected);
        });
        
    });

});