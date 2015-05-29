/* global describe, it */

var assert = require('assert')
var jsdom = require('mocha-jsdom');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var stubContext = require('react-stub-context');

var One = require('../src/One');

describe('One', function() {
  jsdom();

  var levels, content, render

  it('renders three levels deep', function() {
    render = TestUtils.renderIntoDocument(
      React.createElement(One)
    );

    levels = TestUtils.scryRenderedDOMComponentsWithTag(render, 'div');
    assert.equal(levels.length, 3);
  });

  describe("with no 'b' prop", function() {
    beforeEach(function() {
      render = TestUtils.renderIntoDocument(React.createElement(One));

      levels = TestUtils.scryRenderedDOMComponentsWithTag(render, 'div');
      content = render.getDOMNode().textContent;
    });

    it('renders nothing without context from parent at one level deep', function() {
      assert.notEqual(content.indexOf("One ()"), -1);
    });

    it('renders nothing at two levels deep as no prop was passed, therefore no context', function() {
      assert.notEqual(content.indexOf("Two (, )"), -1);
    });

    it('renders context from Two via props from One at three levels deep', function() {
      assert.notEqual(content.indexOf("Three (Zed, )"), -1);
    });
  });

  describe("with a 'b' prop", function() {
    beforeEach(function() {
      render = TestUtils.renderIntoDocument(
        React.createElement(One, {b: 'Aye'})
      );

      levels = TestUtils.scryRenderedDOMComponentsWithTag(render, 'div');
      content = render.getDOMNode().textContent;
    });

    it('renders nothing without context from parent at one level deep', function() {
      assert.notEqual(content.indexOf("One ()"), -1);
    });

    it('renders only prop from One via context at two levels deep', function() {
      assert.notEqual(content.indexOf("Two (, Aye)"), -1);
    });

    it('renders Prop from Two via context and prop from One via context at three levels deep', function() {
      assert.notEqual(content.indexOf("Three (Zed, Aye)"), -1);
    });
  });

  describe("with context", function() {
    beforeEach(function() {
      One = stubContext(One, { a: 'Aye' });

      render = TestUtils.renderIntoDocument(
        React.createElement(One, {b: 'Bee'})
      );

      levels = TestUtils.scryRenderedDOMComponentsWithTag(render, 'div');
      content = render.getDOMNode().textContent;
    });

    it('renders context from parent at one level deep', function() {
      assert.notEqual(content.indexOf("One (Aye)"), -1);
    });

    it('renders context from parent and prop from One via context at two levels deep', function() {
      assert.notEqual(content.indexOf("Two (Aye, Bee)"), -1);
    });

    it('renders Prop from Two via context and prop from One via context at three levels deep', function() {
      assert.notEqual(content.indexOf("Three (Zed, Bee)"), -1);
    });
  });
});
