var React = require('react');
var One = require('./One');

var ContextExample = React.createClass({
	propTypes: {
		a: React.PropTypes.string
	},
	childContextTypes: {
		a: React.PropTypes.string
	},
	getChildContext() {
		return {
			a: this.props.a
		}
	},
	render() {
		return (
			<div>
				Context
				<One b="Bee" />
			</div>
		);
	}
	
});

export default ContextExample;
