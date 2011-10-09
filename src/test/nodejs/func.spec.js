describe("Function", function() {
    var command = require("command");
    var func = require("func");

    var f1;

    beforeEach(function() {
        f1 = func();
    });

    it("has commands", function() {
        f1.addCommand(command.F);
        expect(f1.getCommand(0)).toEqual(command.F);
    });
});