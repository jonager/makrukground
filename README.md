# Makrukground

[![Continuous Integration](https://github.com/lichess-org/chessground/workflows/Continuous%20Integration/badge.svg)](https://github.com/lichess-org/chessground/actions?query=workflow%3A%22Continuous+Integration%22)
[![npm](https://img.shields.io/npm/v/chessground)](https://www.npmjs.com/package/chessground)

![Makrukground in 2D and 3D](/screenshot/2d-example.png)

_Makrukground_ is a free/libre open source makruk UI developed for
[thaichess.org](https://thaichess.org).
It targets modern browsers, as well as mobile development using Cordova.

## License

Makrukground is distributed under the **GPL-3.0 license** (or any later version,
at your option).
When you use Makrukground for your website, your combined work may be
distributed only under the GPL. **You must release your source code** to the
users of your website.

Please read more about GPL for JavaScript on [greendrake.info](https://greendrake.info/publications/js-gpl).

## Features

Makrukground is designed to fulfill all thaichess.org web and mobile apps needs, so it is pretty featureful.

- Well typed with TypeScript
- Fast. Uses a custom DOM diff algorithm to reduce DOM writes to the absolute minimum.
- Small footprint: 10K gzipped (31K unzipped). No dependencies.
- SVG drawing of circles, arrows, and custom user shapes on the board
- Arrows snap to valid moves. Freehand arrows can be drawn by dragging the mouse off the board and back while drawing an arrow.
- Entirely configurable and reconfigurable at any time
- Styling with CSS only: board and pieces can be changed by simply switching a class
- Fluid layout: board can be resized at any time
- Support for 3D pieces and boards
- Full mobile support (touchstart, touchmove, touchend)
- Move pieces by click
- Move pieces by drag & drop
  - Minimum distance before drag
  - Centralisation of the piece under the cursor
  - Piece ghost element
  - Drop off revert or trash
- Premove by click or drag
- Drag new pieces onto the board (editor, Crazyhouse)
- Animation of pieces: moving and fading away
- Display last move, check, move destinations, and premove destinations (hover effects possible)
- Import and export positions in FEN notation
- User callbacks
- No makruk logic inside
## Installation

```sh
npm install --save makrukground
```

### Usage

```js
import { Makrukground } from 'makrukground';

const config = {};
const ground = Makrukground(document.body, config);
```

## Documentation

- [Config types](https://github.com/lichess-org/chessground/tree/master/src/config.ts)
- [Default config values](https://github.com/lichess-org/chessground/tree/master/src/state.ts)
- [API type signatures](https://github.com/lichess-org/chessground/tree/master/src/api.ts)
- [Simple standalone example](https://github.com/lichess-org/chessground/blob/master/demo.html)
- [Examples repo](https://github.com/lichess-org/chessground-examples/tree/master/src/units)
- [Base CSS](https://github.com/lichess-org/chessground-examples/blob/master/assets/chessground.css)

## Development

Install build dependencies:

```sh
npm install
```

To build the node module:

```sh
npm run compile -- --watch
```

To build the standalone:

```sh
npm run dist -- --watch
```
