describe("Ship", function() {
    var command = require("command");
    var direction = require("direction");
    var space = require("space");

    var ship;
    var shipDirection;
    var shipPosition;

    beforeEach(function() {
        ship = require("ship");

        shipDirection = direction.N;
        ship.setDirection(shipDirection);
        spyOn(shipDirection, "clockwise");
        spyOn(shipDirection, "counterclockwise");

        shipPosition = space();
        ship.setPosition(shipPosition);
        spyOn(shipPosition, "getNeighbor");
    });

    it("Command clockwise delegates to direction", function() {
        ship.command(command.CW);
        expect(shipDirection.clockwise).toHaveBeenCalled();
    });
    it("Command counterclockwise delegates to direction", function() {
        ship.command(command.CCW);
        expect(shipDirection.counterclockwise).toHaveBeenCalled();
    });
    it("Command forward moves to a new space", function() {
        ship.command(command.F);
        expect(shipPosition.getNeighbor).toHaveBeenCalledWith(direction.N);
    });
});