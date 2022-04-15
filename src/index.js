const R = require("ramda");

function zeros2d(m, n) {
  return R.range(0, m).map(() => R.range(0, n).map(() => 0));
}

function fullfact(levels, opt = {}) {
  const nFactors = levels.length;
  const nbLines = levels.reduce((accum, curr) => accum * curr, 1);
}

const mat = zeros2d(3, 5);

console.log(mat);
