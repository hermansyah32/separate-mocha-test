process.env.NODE_ENV = "testing";

const problemOne = require("./modules/1. problem_one.part");

describe("math problem", () => {
  describe("problem one", problemOne.bind(this));
});
