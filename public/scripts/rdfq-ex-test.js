// # RDFQ-EX - Experiments with rdfquery
//
// Copyright (C) 2011 Patrick Logan
//
// Distributed under the terms of the GNU LESSER GENERAL PUBLIC LICENSE, Version 3.
//
// See the README, COPYING, and COPYING.LESSER files in this distribution.
//
// This file provides examples as qunit tests.  Visiting the file
// rdfq-ex/public/test.html should be sufficient for running the tests
// in a browser.
//
// The script test.sh will run the qunit tests in a shell if phantomjs
// is installed.
$(document).ready(function() {

    // Test creating a databank. This is from the rdfquery wiki:
    // http://code.google.com/p/rdfquery/wiki/RdfPlugin
    test("create a databank", function() {
	$.rdf.databank().
	    base('http://example.org/').
	    prefix('dc', 'http://purl.org/dc/elements/1.1/').
	    prefix('foaf', 'http://xmlns.com/foaf/0.1').
	    add('<photo1.jpg> dc:creator <http://www..blogger.com/profile/1109404> .').
	    add('<http://www.blogger.com/profile/1109404> foaf:img <photo.jpg> .');
	ok(false, "This isn't a real test yet.");
    });

});
