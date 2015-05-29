var React = require('react');

var Three = React.createClass({
	contextTypes: {
		a: React.PropTypes.string,
		b: React.PropTypes.string
	},
	render() {
		return (
			<div>
				Three
				({this.context.a}, {this.context.b})
			</div>
		);
	}
});

export default Three;
