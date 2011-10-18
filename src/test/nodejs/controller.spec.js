describe("Controller", function() {
    var command = require("command");
    var direction = require("direction");
    var func = require("func");
    var program = require("program");
    var ship = require("ship");
    var space = require("space");
    var star = require("star");

    var controller = require("controller");

    var ctrl;

    beforeEach(function() {
        ctrl = controller.create();
    });

    it("terminates when all stars are visited", function() {
        var spaceA = space.create();
        var spaceB = space.create();
        spaceA.setNeighbor(direction.E, spaceB);
        var starA = star.create();
        spaceB.setStar(starA);
        var f1 = func.create();
        f1.addCommand(command.CW);
        f1.addCommand(command.F);
        var prg = program.create();
        prg.addFunction(f1);
        var shipA = ship.create();
        shipA.setPosition(spaceA);
        shipA.setDirection(direction.N);

        ctrl.setShip(shipA);
        ctrl.setProgram(prg);

        expect(ctrl.validate()).toBeTruthy();
    });
});
