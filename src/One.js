var React = require('react');
var Two = require('./Two');

var One = React.createClass({
	propTypes: {
		b: React.PropTypes.string
	},
	contextTypes: {
		a: React.PropTypes.string
	},
	childContextTypes: {
		b: React.PropTypes.string
	},
	getChildContext() {
		return {
			b: this.props.b
		}
	},
	render() {
		return (
			<div>
				One
				({this.context.a})
				<Two a="Zed" />
			</div>
		);
	}
});

export default One;
