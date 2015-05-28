"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");

var Three = require('./Three');

var Two = React.createClass({
	displayName: "Two",

	contextTypes: {
		a: React.PropTypes.string,
		b: React.PropTypes.string
	},
	childContextTypes: {
		a: React.PropTypes.string
	},
	getChildContext: function getChildContext() {
		return {
			a: this.props.a || this.context.a
		};
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			"Two (",
			this.context.a,
			", ",
			this.context.b,
			")",
			React.createElement(Three, null)
		);
	}
});

module.exports = Two;
