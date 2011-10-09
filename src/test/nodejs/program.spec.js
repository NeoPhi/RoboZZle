describe("Program", function() {
    var func = require("func");
    var command = require("command");

    var program;

    beforeEach(function() {
        program = require("program");
    });

    it("has functions", function() {
        var f1 = func();
        expect(program.addFunction(f1).getFunction(0)).toEqual(f1);
    });

    it("can step", function() {
        var f1 = func();
        f1.addCommand(command.F);
        expect(program.nextStep()).toEqual(command.F);
    });
});