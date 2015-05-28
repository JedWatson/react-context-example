"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");

var Three = React.createClass({
	displayName: "Three",

	contextTypes: {
		a: React.PropTypes.string,
		b: React.PropTypes.string
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			"Three (",
			this.context.a,
			", ",
			this.context.b,
			")"
		);
	}
});

module.exports = Three;
