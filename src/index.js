const R = require("ramda");

function zeros2d(m, n) {
  return R.map(() => R.repeat(0, n), R.range(0, m));
}

const fullfact = (levels) => {
  // check input argument
  if (
    !Array.isArray(levels) ||
    !levels.reduce((a, c) => a && Number.isInteger(c), true)
  ) {
    throw new Error("Argument 'levels' must be an array of integers.");
  }

  const nFactors = levels.length;
  const nbLines = levels.reduce((accum, curr) => accum * curr, 1);
  const H = zeros2d(nbLines, nFactors);

  let levelRepeat = 1;
  let rangeRepeat = levels.reduce((a, c) => a * c, 1);

  for (let i of R.range(0, nFactors)) {
    rangeRepeat = Math.floor(rangeRepeat / levels[i]);
    const lvl = R.flatten(
      R.map((x) => R.repeat(x, levelRepeat), R.range(0, levels[i]))
    );
    const rng = R.flatten(R.repeat(lvl, rangeRepeat));
    for (let k of R.range(0, nbLines)) {
      H[k][i] = rng[k];
    }
    levelRepeat *= levels[i];
  }

  return H;
};
module.exports.fullfact = fullfact;

const buildHydratedFullfact = (factorMatrix) => {
  const keyList = Object.keys(factorMatrix);
  const levels = keyList.map((key) => factorMatrix[key].length);
  const doe = fullfact(levels);
  return doe.map((x) => {
    return keyList.reduce((a, key, idx) => {
      a[key] = factorMatrix[key][x[idx]];
      return a;
    }, {});
  });
};
module.exports.buildHydratedFullfact = buildHydratedFullfact;
