jest.dontMock('../ContextExample')
jest.dontMock('../One')
jest.dontMock('../Two')
jest.dontMock('../Three')

describe('ContextExample', function() {
  var React, TestUtils, ContextExample, stubContext, render;

  beforeEach(function() {
    React = require.requireActual('react/addons');
    TestUtils = React.addons.TestUtils;
    ContextExample = require('../ContextExample');
    render = TestUtils.renderIntoDocument(
      React.createElement(ContextExample, { a: 'Aye' })
    );
  });

  it('renders three levels of context', function() {
    var levels = TestUtils.scryRenderedDOMComponentsWithTag(render, 'div');
    expect(levels.length).toEqual(4);
  });

  it('renders ContextExample prop via context at one level deep', function() {
    var content = render.getDOMNode().textContent;
    expect(content.indexOf("One (Aye)")).not.toEqual(-1);
  });

  it('renders ContentExample prop via context and One prop via context at two levels deep', function() {
    var content = render.getDOMNode().textContent;
    expect(content.indexOf("Two (Aye, Bee)")).not.toEqual(-1);
  });

  it('renders Two prop via context and One prop via context at three levels deep', function() {
    var content = render.getDOMNode().textContent;
    expect(content.indexOf("Three (Zed, Bee)")).not.toEqual(-1);
  });
});
