import { expect } from "chai";
import { Calculator } from "../src";

describe("calculate", function () {
    it("add", function () {
        const result = Calculator.sum([5, 1]);
        expect(result).equal(7);
    });
});
