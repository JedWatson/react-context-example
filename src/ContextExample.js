var React = require('react');

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

export default ContextExample;
