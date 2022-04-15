# fullfact

A library for generating full-factorial Design of Experiments (DOEs).

## Usage

Add fullfact to your project by using:

```sh
npm install --save fullfact
```

## Examples

To create a full-factorial matrix, start by specifying a levels
array with the number of levels for each factor in your DOE.

```
const { fullfact } = require("fullfact");

const levels = [2, 2];
const doe = fullfact(levels);

console.log(doe);
// [ [ 0, 0 ], [ 1, 0 ], [ 0, 1 ], [ 1, 1 ] ]
```

A convenience function `hydratedFullfact` is also available
to handle the mapping of DOE indices to key-value pairs within
an array of objects. This function expects a factors matrix
of the form:

- `{ [key: string]: any[] }`

Consider an example where we have an experiment of two factors: (1) temperature [C]
and (2) pressure [kPa]. A factor matrix could be defined as:

```
const { hydratedFullfact } = require("fullfact");

const factorMatrix = {
   temperature: [10, 20, 30],
   pressure: [90, 100, 110]
};

const hydratedDoe = hydratedFullfact(factorMatrix);

console.log(hydratedDoe);
// [
//   { temperature: 10, pressure: 90 },
//   { temperature: 20, pressure: 90 },
//   { temperature: 30, pressure: 90 },
//   { temperature: 10, pressure: 100 },
//   { temperature: 20, pressure: 100 },
//   { temperature: 30, pressure: 100 },
//   { temperature: 10, pressure: 110 },
//   { temperature: 20, pressure: 110 },
//   { temperature: 30, pressure: 110 }
// ]
```

## Contributing

This package is a derivative work, based on the python project [pyDOE](https://github.com/tisimst/pyDOE).
Thanks to Abraham D. Lee and all contributors.

Please feel free to reach out to the [author](mailto:cartwright.76@gmail.com) of this package
for any and all feedback.

## License

[BSD (3-Clause)](https://opensource.org/licenses/BSD-3-Clause)

Copyright (c) 2022, Justin Cartwright

Copyright (c) 2014, Abraham D. Lee

## References

- Factorial designs: https://en.wikipedia.org/wiki/Factorial_experiment
- package homepage: https://github.com/jcartw/fullfact
