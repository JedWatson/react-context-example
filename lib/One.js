"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var React = require("react");
var Two = require('./Two');

var One = React.createClass({
	displayName: "One",

	propTypes: {
		b: React.PropTypes.string
	},
	contextTypes: {
		a: React.PropTypes.string
	},
	childContextTypes: {
		b: React.PropTypes.string
	},
	getChildContext: function getChildContext() {
		return {
			b: this.props.b
		};
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			"One (",
			this.context.a,
			")",
			React.createElement(Two, { a: "Zed" })
		);
	}
});

module.exports = One;
