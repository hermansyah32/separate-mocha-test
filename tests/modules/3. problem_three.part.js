const { sumData } = require("../../src/math_problem");
const { expect } = require("chai");

const problem_three_test = () => {
  it("has to be 10", () => {
    const result = sumData(2, 2, Number(process.env.STATIC_NUMBER));
    expect(result).eql(10);
  });
};

if (process.env.TEST_MODE !== "batch") {
  describe("problem three", problem_three_test.bind(this));
}

module.exports = problem_three_test;
