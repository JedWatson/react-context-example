jest.dontMock('../One')
jest.dontMock('../Two')
jest.dontMock('../Three')

describe('One', function() {
  var React, TestUtils, ContextExample, stubContext, render, content, levels;

  beforeEach(function() {
    React = require.requireActual('react/addons');
    TestUtils = React.addons.TestUtils;
    stubContext = require.requireActual('react-stub-context');
    One = require('../One');
  });

  it('renders three levels deep', function() {
    render = TestUtils.renderIntoDocument(
      React.createElement(One)
    );

    levels = TestUtils.scryRenderedDOMComponentsWithTag(render, 'div');
    expect(levels.length).toEqual(3);
  });

  describe("with no 'b' prop", function() {
    beforeEach(function() {
      render = TestUtils.renderIntoDocument(
        React.createElement(One)
      );
      levels = TestUtils.scryRenderedDOMComponentsWithTag(render, 'div');
      content = render.getDOMNode().textContent;
    });

    it('renders nothing without context from parent at one level deep', function() {
      expect(content.indexOf("One ()")).not.toEqual(-1);
    });

    it('renders nothing at two levels deep as no prop was passed, therefore no context', function() {
      expect(content.indexOf("Two (, )")).not.toEqual(-1);
    });

    it('renders context from Two via props from One at three levels deep', function() {
      expect(content.indexOf("Three (Zed, )")).not.toEqual(-1);
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
      expect(content.indexOf("One ()")).not.toEqual(-1);
    });

    it('renders only prop from One via context at two levels deep', function() {
      expect(content.indexOf("Two (, Aye)")).not.toEqual(-1);
    });

    it('renders Prop from Two via context and prop from One via context at three levels deep', function() {
      expect(content.indexOf("Three (Zed, Aye)")).not.toEqual(-1);
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
      expect(content.indexOf("One (Aye)")).not.toEqual(-1);
    });

    it('renders context from parent and prop from One via context at two levels deep', function() {
      expect(content.indexOf("Two (Aye, Bee)")).not.toEqual(-1);
    });

    it('renders Prop from Two via context and prop from One via context at three levels deep', function() {
      expect(content.indexOf("Three (Zed, Bee)")).not.toEqual(-1);
    });
  });
});
