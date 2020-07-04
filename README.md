# Sign Bunny

> A package to create a sign bunny character. Forked from https://github.com/ryanbahniuk/sign-bunny to support piping.

    |￣￣￣￣￣￣|
    | BEST     |
    | NPM      |
    | PACKAGE  |
    | EVER     |
    |＿＿＿＿＿＿|
    (\__/) ||
    (•ㅅ•)  ||
    / 　 づ

## Installation

Install via npm:

 ```sh
npm install signbunny # note - not sign-bunny
 ```

## Using this Package

The `signbunny` module returns a function that takes a string and returns the sign bunny ASCII art as a new line separated string:

```js
var signBunny = require('signbunny');

var asciiArt = signBunny('Best NPM Package Ever');
```

## CLI

You can also use the CLI `signbunny <string>`.


## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests
to cover it. Continuous Integration is handled by [Travis](https://travis-ci.org/ryanbahniuk/sign-bunny "Travis").

## License

MIT © Ryan Bahniuk

[npm]:     https://www.npmjs.com/package/signbunny

