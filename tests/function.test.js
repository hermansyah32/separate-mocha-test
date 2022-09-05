process.env.NODE_ENV = "testing";
process.env.TEST_MODE = "batch";

const problemOne = require("./modules/1. problem_one.part");
const problemTwo = require("./modules/2. problem_two.part")(4);

describe("math problem", () => {
  describe("problem one", problemOne.bind(this));
  describe("problem two", problemTwo.bind(this));
});
