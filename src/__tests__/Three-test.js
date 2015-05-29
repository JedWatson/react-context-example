jest.dontMock('../Three')

describe('Three', function() {
  var React, TestUtils, ContextExample, stubContext, render, content, levels;

  React = require.requireActual('react/addons');
  TestUtils = React.addons.TestUtils;
  stubContext = require.requireActual('react-stub-context');
  Three = require('../Three');

  it('renders one level deep', function() {
    render = TestUtils.renderIntoDocument(
      React.createElement(Three)
    );

    levels = TestUtils.scryRenderedDOMComponentsWithTag(render, 'div');
    expect(levels.length).toEqual(1);
  });

  describe("without context", function() {
    it('renders nothing without context from parents at one level deep', function() {
      render = TestUtils.renderIntoDocument(
        React.createElement(Three)
      );

      content = render.getDOMNode().textContent;
      expect(content.indexOf("Three (, )")).not.toEqual(-1);
    });
  });

  describe("with context", function() {
    it('renders context from parents at one level deep', function() {
      Three = stubContext(Three, { a: 'Aye', b: 'Bee' });

      render = TestUtils.renderIntoDocument(
        React.createElement(Three)
      );

      content = render.getDOMNode().textContent;
      expect(content.indexOf("Three (Aye, Bee)")).not.toEqual(-1);
    });
  });
});
