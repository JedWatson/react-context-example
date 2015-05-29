/* global describe, it */

var assert = require('assert')
var jsdom = require('mocha-jsdom');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var ContextExample = require('../src/ContextExample');

describe('ContextExample', function() {
	jsdom();

	var render

	beforeEach(function() {
		render = TestUtils.renderIntoDocument(React.createElement(ContextExample, { a: 'Aye' }));
	})

	it('renders three levels of context', function() {
		var levels = TestUtils.scryRenderedDOMComponentsWithTag(render, 'div');
		assert.equal(levels.length, 4);
	});

	it('renders ContextExample prop via context at one level deep', function() {
		var content = render.getDOMNode().textContent;
		assert.notEqual(content.indexOf("One (Aye)"), -1);
	});

	it('renders ContentExample prop via context and One prop via context at two levels deep', function() {
		var content = render.getDOMNode().textContent;
		assert.notEqual(content.indexOf("Two (Aye, Bee)"), -1);
	});

	it('renders Two prop via context and One prop via context at three levels deep', function() {
		var content = render.getDOMNode().textContent;
		assert.notEqual(content.indexOf("Three (Zed, Bee)"), -1);
	});
});
