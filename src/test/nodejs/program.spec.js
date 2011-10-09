describe("Program", function() {
    var func = require("func");
    var command = require("command");
    var program = require("program");

    var prg;

    beforeEach(function() {
        prg = program.create();
    });

    it("has functions", function() {
        var f1 = func.create();
        expect(prg.addFunction(f1).getFunction(0)).toEqual(f1);
    });

    it("can step", function() {
        var f1 = func.create();
        f1.addCommand(command.F);
        expect(prg.addFunction(f1).nextStep()).toEqual(command.F);
    });
});