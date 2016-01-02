es6-pixi-bolierplate
=================

This is a simple Pixi.js template to start building games using ES6/2015.

## Usage
First of all, this project needs [Webpack](https://webpack.github.io/) in the global scope:

```js
npm install webpack -g
```

Once we have installed webpack just clone this repository:
```js
git clone https://github.com/Nazariglez/es6-pixi-bolierplate.git
```

And install it:

```js
npm install
```

Now you can use `npm start` or `npm run dev` to start watching and compiling files, or `npm run build` to create a minified, ready to production file.

## Files
This project has just 5 files in the `src` folder like a start point.

- __plugin.js:__ Add the plugins what you want to extend pixi. This template use the [pixi-animationloop](https://github.com/Nazariglez/pixi-animationloop) plugin by default.
- __index.js:__ Create the game object.
- __config.js:__ The renderer config, like width, height, etc...
- __Game.js:__ A simple object to manage the basic game things.
- __Bunny.js:__ An extended PIXI.Sprite used like an example.
