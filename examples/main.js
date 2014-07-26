/*global define:true requirejs:true*/
/* jshint strict: false */
requirejs.config({
    paths: {
        'jquery': 'jquery/jquery',
        'tuxedo': 'tuxedo'
    }
});

define(['tuxedo', 'jquery'], function (Tuxedo, $) {
    console.log('Loading');
	var tuxedo = new Tuxedo();
	tuxedo.init();
});