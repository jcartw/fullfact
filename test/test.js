const { expect } = require("chai");

const { fullfact, hydratedFullfact } = require("../src/index");

describe("Full-factorial DOEs", () => {
  describe("fullfact(x)", () => {
    it("should create a fullfact DOE with levels = [3]", () => {
      const levels = [3];
      const doe = fullfact(levels);
      expect(doe.length).to.equal(3);

      expect(doe[0].length).to.equal(1);
      expect(doe[0][0]).to.equal(0);
      expect(doe[1].length).to.equal(1);
      expect(doe[1][0]).to.equal(1);
      expect(doe[2].length).to.equal(1);
      expect(doe[2][0]).to.equal(2);
    });
    it("should create a fullfact DOE with levels = [1, 2]", () => {
      const levels = [1, 2];
      const doe = fullfact(levels);
      expect(doe.length).to.equal(2);

      expect(doe[0].length).to.equal(2);
      expect(doe[0][0]).to.equal(0);
      expect(doe[0][1]).to.equal(0);
      expect(doe[1].length).to.equal(2);
      expect(doe[1][0]).to.equal(0);
      expect(doe[1][1]).to.equal(1);
    });
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
    it("should create a fullfact DOE with levels = [2, 3]", () => {
      const levels = [2, 3];
      const doe = fullfact(levels);
      expect(doe.length).to.equal(6);
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
      expect(doe[4].length).to.equal(2);
      expect(doe[4][0]).to.equal(0);
      expect(doe[4][1]).to.equal(2);
      expect(doe[5].length).to.equal(2);
      expect(doe[5][0]).to.equal(1);
      expect(doe[5][1]).to.equal(2);
    });
    it("should create a fullfact DOE with levels = [1, 1, 2]", () => {
      const levels = [1, 1, 2];
      const doe = fullfact(levels);
      expect(doe.length).to.equal(2);

      expect(doe[0].length).to.equal(3);
      expect(doe[0][0]).to.equal(0);
      expect(doe[0][1]).to.equal(0);
      expect(doe[0][2]).to.equal(0);
      expect(doe[1].length).to.equal(3);
      expect(doe[1][0]).to.equal(0);
      expect(doe[1][1]).to.equal(0);
      expect(doe[1][2]).to.equal(1);
    });
    it("should throw an error if a string is passed as an arg", () => {
      let failed = false;
      try {
        fullfact("abc");
      } catch (err) {
        failed = true;
      }
      expect(failed).to.be.true;
    });
    it("should throw an error if a non-integer is passed in the levels array", () => {
      let failed = false;
      try {
        fullfact([1, 2, 3.5]);
      } catch (err) {
        failed = true;
      }
      expect(failed).to.be.true;
    });
  });

  describe("hydratedFullfact(x)", () => {
    it("should build a hydrated fullfact DOE", () => {
      const factorMatrix = {
        a: [1, 2],
        b: ["x", "y", "z"]
      };
      const hydratedDoe = hydratedFullfact(factorMatrix);

      // verify number of expected combinations
      expect(hydratedDoe.length).to.equal(6);

      // verify each object has the expected keys
      for (let obj of hydratedDoe) {
        expect(obj).to.haveOwnProperty("a");
        expect(obj).to.haveOwnProperty("b");
      }

      // verify each entry
      expect(hydratedDoe[0].a).to.equal(1);
      expect(hydratedDoe[0].b).to.equal("x");
      expect(hydratedDoe[1].a).to.equal(2);
      expect(hydratedDoe[1].b).to.equal("x");
      expect(hydratedDoe[2].a).to.equal(1);
      expect(hydratedDoe[2].b).to.equal("y");
      expect(hydratedDoe[3].a).to.equal(2);
      expect(hydratedDoe[3].b).to.equal("y");
      expect(hydratedDoe[4].a).to.equal(1);
      expect(hydratedDoe[4].b).to.equal("z");
      expect(hydratedDoe[5].a).to.equal(2);
      expect(hydratedDoe[5].b).to.equal("z");
    });
    it("should throw an error if an array is provided", () => {
      let failed = false;
      try {
        hydratedFullfact([1, 2]);
      } catch (err) {
        failed = true;
      }
      expect(failed).to.be.true;
    });
    it("should throw an error if an invalid object is provided", () => {
      let failed = false;
      try {
        hydratedFullfact({ a: [1, 2], b: "c" });
      } catch (err) {
        failed = true;
      }
      expect(failed).to.be.true;
    });
  });
});
