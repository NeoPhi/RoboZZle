describe("Function", function() {
    var command = require("command");
    var func = require("func");

    var f1;

    beforeEach(function() {
        f1 = func();
    });

    it("has commands", function() {
        expect(f1.addCommand(command.F).getCommand(0)).toEqual(command.F);
    });

    it("doesn't blow up", function() {
        expect(f1.getCommand(0)).toBeUndefined();
    });
});