const { sumData } = require("../../src/math_problem");
const { expect } = require("chai");

const problem_two_test = (c) => {
  return function () {
    it("has to be 8", () => {
      const result = sumData(2, 2, c);
      expect(result).eql(8);
    });
  };
};

module.exports = problem_two_test;
