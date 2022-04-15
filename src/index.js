const R = require("ramda");

function zeros2d(m, n) {
  return R.map(() => R.repeat(0, n), R.range(0, m));
}

const fullfact = (levels) => {
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

//const levels = [2, 3, 3, 3];
//console.log(fullfact(levels));

//function fullfact(levels) {
//  const nFactors = levels.length;
//  const nbLines = levels.reduce((accum, curr) => accum * curr, 1);
//  const H = zeros2d(nbLines, nFactors);
//
//  let levelRepeat = 1;
//  let rangeRepeat = levels.reduce((a, c) => a * c, 1);
//  let rngList = [];
//
//  // get matrix slices
//  for (let i of R.range(0, nFactors)) {
//    rangeRepeat = Math.floor(rangeRepeat / levels[i]);
//    const lvl = R.flatten(
//      R.map((x) => R.repeat(x, levelRepeat), R.range(0, levels[i]))
//    );
//    const rng = R.flatten(R.repeat(lvl, rangeRepeat));
//    rngList.push(rng);
//    levelRepeat *= levels[i];
//  }
//
//  // fill matrix
//  for (let i of R.range(0, nFactors)) {
//    for (let k of R.range(0, nbLines)) {
//      H[k][i] = rngList[i][k];
//    }
//  }
//
//  return H;
//}
