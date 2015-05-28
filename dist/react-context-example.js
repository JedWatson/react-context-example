(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ContextExample = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});