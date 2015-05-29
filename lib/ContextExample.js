"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var React = require("react");

var ContextExample = React.createClass({
	displayName: "ContextExample",

	propTypes: {
		a: React.PropTypes.string
	},
	childContextTypes: {
		a: React.PropTypes.string
	},
	getChildContext: function getChildContext() {
		return {
			a: this.props.a
		};
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			"Context",
			React.createElement(One, { b: "Bee" })
		);
	}

});

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

exports["default"] = ContextExample;
module.exports = exports["default"];