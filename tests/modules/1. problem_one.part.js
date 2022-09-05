const { sumData } = require("../../src/math_problem");
const { expect } = require("chai");

const problem_one_test = () => {
  it("has to be 4", () => {
    const result = sumData(2, 2);
    expect(result).eql(4);
  });
};

module.exports = problem_one_test;
