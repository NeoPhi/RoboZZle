describe("Program", function() {
    var func = require("func");
    var command = require("command");

    var program;

    beforeEach(function() {
        program = require("program");
    });

    it("has default function", function() {
        var f1 = func();
        expect(program.addFunction(f1).getFunction(0)).toEqual(f1);
    });
});