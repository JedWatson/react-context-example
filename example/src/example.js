var React = require('react');
var ContextExample = require('react-context-example');

var App = React.createClass({
	render () {
		return (
			<div>
				<ContextExample a="Aye" />
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));
