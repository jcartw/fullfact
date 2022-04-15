const { expect } = require("chai");

const { fullfact } = require("../src/index");

describe("Full-factorial DOEs", () => {
  it("should create a fullfact DOE with levels = [2, 2]", () => {
    const levels = [2, 2];
    const doe = fullfact(levels);
    expect(doe.length).to.equal(4);

    expect(doe[0].length).to.equal(2);
    expect(doe[0][0]).to.equal(0);
    expect(doe[0][1]).to.equal(0);

    expect(doe[1].length).to.equal(2);
    expect(doe[1][0]).to.equal(1);
    expect(doe[1][1]).to.equal(0);

    expect(doe[2].length).to.equal(2);
    expect(doe[2][0]).to.equal(0);
    expect(doe[2][1]).to.equal(1);

    expect(doe[3].length).to.equal(2);
    expect(doe[3][0]).to.equal(1);
    expect(doe[3][1]).to.equal(1);
  });
});