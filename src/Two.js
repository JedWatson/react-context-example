var React = require('react');
var Three = require('./Three');

var Two = React.createClass({
	contextTypes: {
		a: React.PropTypes.string,
		b: React.PropTypes.string
	},
	childContextTypes: {
		a: React.PropTypes.string
	},
	getChildContext() {
		return {
			a: this.props.a || this.context.a
		}
	},
	render() {
		return (
			<div>
				Two
				({this.context.a}, {this.context.b})
				<Three />
			</div>
		);
	}
});

export default Two;
