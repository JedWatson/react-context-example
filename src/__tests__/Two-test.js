jest.dontMock('../Two')
jest.dontMock('../Three')

describe('Two', function() {
  var React, TestUtils, ContextExample, stubContext, render, content, levels;

  React = require.requireActual('react/addons');
  TestUtils = React.addons.TestUtils;
  stubContext = require.requireActual('react-stub-context');
  Two = require('../Two');

  it('renders two levels deep', function() {
    render = TestUtils.renderIntoDocument(
      React.createElement(Two)
    );

    levels = TestUtils.scryRenderedDOMComponentsWithTag(render, 'div');
    expect(levels.length).toEqual(2);
  });

  describe("with no 'a' prop", function() {
    beforeEach(function() {
      render = TestUtils.renderIntoDocument(
        React.createElement(Two)
      );

      levels = TestUtils.scryRenderedDOMComponentsWithTag(render, 'div');
      content = render.getDOMNode().textContent;
    });

    it('renders nothing without context from parents at one level deep', function() {
      expect(content.indexOf("Two (, )")).not.toEqual(-1);
    });

    it('renders nothing without context from parents at two levels deep', function() {
      expect(content.indexOf("Three (, )")).not.toEqual(-1);
    });
  });

  describe("with an 'a' prop", function() {
    beforeEach(function() {
      render = TestUtils.renderIntoDocument(
        React.createElement(Two, {a: 'Zed'})
      );

      levels = TestUtils.scryRenderedDOMComponentsWithTag(render, 'div');
      content = render.getDOMNode().textContent;
    });

    it('renders nothing without context from parents at one level deep', function() {
      expect(content.indexOf("Two (, )")).not.toEqual(-1);
    });

    it('renders prop from Two via context at two levels deep', function() {
      expect(content.indexOf("Three (Zed, )")).not.toEqual(-1);
    });
  });

  describe("with context", function() {
    beforeEach(function() {
      Two = stubContext(Two, { a: 'Aye', b: 'Bee' });

      render = TestUtils.renderIntoDocument(
        React.createElement(Two, {b: 'Zed'})
      );

      levels = TestUtils.scryRenderedDOMComponentsWithTag(render, 'div');
      content = render.getDOMNode().textContent;
    });

    it('renders context from parents at one level deep', function() {
      expect(content.indexOf("Two (Aye, Bee)")).not.toEqual(-1);
    });

    it('renders context from parents at two levels deep', function() {
      expect(content.indexOf("Three (Aye, Bee)")).not.toEqual(-1);
    });
  });
});
