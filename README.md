# Context Example

This is an example component I set up to test how `context` works under different conditions in React.js.

Any discussion of context wouldn't be complete without:
* [@learnreact](https://twitter.com/learnreact)'s [introduction to context](https://medium.com/@learnreact/context-f932a9abab0e) by [Michael Chan](https://twitter.com/chantastic)
* the [context unit tests](https://github.com/facebook/react/blob/v0.13.3/src/core/__tests__/ReactCompositeComponent-test.js#L548) in React itself

This isn't something you'd actually use in any project; I published it because I figured it might be useful to others as a reference or a playpen where you can experiment with your own scenarios.


## Demo & Examples

Live demo: [JedWatson.github.io/react-context-example](http://JedWatson.github.io/react-context-example/)

Clone this repo and run the examples locally:

```
git clone https://github.com/JedWatson/react-context-example.git
cd react-context-example
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.

Any changes you make will be live reloaded.


## Development (`src` and `lib` notes)

The source for the examples is in `src`. All your changes should be made in here.

The `lib` folder is automatically generated by the build process, and is transpiled from ES6 and JSX to ES5 Javascript by Babel.

See [the generator I used to create this project](https://github.com/JedWatson/generator-react-component) for more comprehensive documentation.


### Why?

When you pull a component into your project using Browserify or Webpack (or require it from node) you don't want to have to worry about converting ES6 or JSX. So that's done for you - the entrypoint of this component is the `lib` folder.

Similarly, if you don't have a build process, you want to use the bundled package (which has a UMD loader) from the `dist` folder.


## Installation

If, for some reason, you want to install this from npm:

```
npm install react-context-example --save
```


### License

MIT. Copyright (c) 2015 Jed Watson.

