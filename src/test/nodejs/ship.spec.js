describe("Ship", function() {
    var command = require("command");
    var direction = require("direction");
    var ship;
    var shipDirection;

    beforeEach(function() {
        ship = require("ship");
        shipDirection = direction.N;
        ship.setDirection(shipDirection);
        spyOn(shipDirection, "clockwise");
        spyOn(shipDirection, "counterclockwise");
    });

    describe("Command Clockwise", function() {
        it("calls direction.clockwise", function() {
            ship.command(command.CW);
            expect(shipDirection.clockwise).toHaveBeenCalled();
            expect(shipDirection.counterclockwise).not.toHaveBeenCalled();
            expect(ship.getDirection()).toEqual(direction.N.clockwise());
        });
    });

    describe("Command Counterclockwise", function() {
        it("calls direction.counterclockwise", function() {
            ship.command(command.CCW);
            expect(shipDirection.clockwise).not.toHaveBeenCalled();
            expect(shipDirection.counterclockwise).toHaveBeenCalled();
            expect(ship.getDirection()).toEqual(direction.N.counterclockwise());
        });
    });
    
    describe("Command Forward", function() {
       it("moves to a new space", function() {
           ship.command(command.F);
       });
    });
});