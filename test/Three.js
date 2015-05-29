/* global describe, it */

var assert = require('assert')
var jsdom = require('mocha-jsdom');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var stubContext = require('react-stub-context');

var Three = require('../src/Three');

describe('Three', function () {
	jsdom();

	var levels, content, render

	it('renders one level deep', function () {
		render = TestUtils.renderIntoDocument(
			React.createElement(Three)
		);

		levels = TestUtils.scryRenderedDOMComponentsWithTag(render, 'div');
		assert.equal(levels.length, 1);
	});

	describe("without context", function () {
		it('renders nothing without context from parents at one level deep', function () {
			render = TestUtils.renderIntoDocument(
				React.createElement(Three)
			);

			content = render.getDOMNode().textContent;
			assert.notEqual(content.indexOf("Three (, )"), -1);
		});
	});

	describe("with context", function () {
		it('renders context from parents at one level deep', function () {
			Three = stubContext(Three, { a: 'Aye', b: 'Bee' });

			render = TestUtils.renderIntoDocument(
				React.createElement(Three)
			);

			content = render.getDOMNode().textContent;
			assert.notEqual(content.indexOf("Three (Aye, Bee)"), -1);
		});
	});
});
