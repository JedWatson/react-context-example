/* global describe, it */

var assert = require('assert')
var jsdom = require('mocha-jsdom');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var stubContext = require('react-stub-context');

var Two = require('../src/Two');

describe('Two', function () {
	jsdom();

	var levels, content, render

	it('renders two levels deep', function () {
		render = TestUtils.renderIntoDocument(React.createElement(Two));

		levels = TestUtils.scryRenderedDOMComponentsWithTag(render, 'div');
		assert.equal(levels.length, 2);
	});

	describe("with no 'a' prop", function () {
		beforeEach(function () {
			render = TestUtils.renderIntoDocument(
				React.createElement(Two)
			);

			levels = TestUtils.scryRenderedDOMComponentsWithTag(render, 'div');
			content = render.getDOMNode().textContent;
		});

		it('renders nothing without context from parents at one level deep', function () {
			assert.notEqual(content.indexOf('Two (, )'), -1);
		});

		it('renders nothing without context from parents at two levels deep', function () {
			assert.notEqual(content.indexOf('Three (, )'), -1);
		});
	});

	describe("with an 'a' prop", function () {
		beforeEach(function () {
			render = TestUtils.renderIntoDocument(
				React.createElement(Two, {a: 'Zed'})
			);

			levels = TestUtils.scryRenderedDOMComponentsWithTag(render, 'div');
			content = render.getDOMNode().textContent;
		});

		it('renders nothing without context from parents at one level deep', function () {
			assert.notEqual(content.indexOf('Two (, )'), -1);
		});

		it('renders prop from Two via context at two levels deep', function () {
			assert.notEqual(content.indexOf('Three (Zed, )'), -1);
		});
	});

	describe('with context', function () {
		beforeEach(function () {
			Two = stubContext(Two, { a: 'Aye', b: 'Bee' });

			render = TestUtils.renderIntoDocument(
				React.createElement(Two, {b: 'Zed'})
			);

			levels = TestUtils.scryRenderedDOMComponentsWithTag(render, 'div');
			content = render.getDOMNode().textContent;
		});

		it('renders context from parents at one level deep', function () {
			assert.notEqual(content.indexOf('Two (Aye, Bee)'), -1);
		});

		it('renders context from parents at two levels deep', function () {
			assert.notEqual(content.indexOf('Three (Aye, Bee)'), -1);
		});
	});
});
