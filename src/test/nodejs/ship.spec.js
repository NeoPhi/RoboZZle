describe("Ship", function() {
    var command = require("command");
    var direction = require("direction");
    var space = require("space");
    var ship = require("ship");

    var theShip;
    var shipDirection;
    var shipPosition;

    beforeEach(function() {
        theShip = ship.create();

        shipDirection = direction.N;
        theShip.setDirection(shipDirection);
        spyOn(shipDirection, "clockwise");
        spyOn(shipDirection, "counterclockwise");

        shipPosition = space.create();
        theShip.setPosition(shipPosition);
        spyOn(shipPosition, "getNeighbor");
    });

    it("Command clockwise delegates to direction", function() {
        theShip.command(command.CW);
        expect(shipDirection.clockwise).toHaveBeenCalled();
    });

    it("Command counterclockwise delegates to direction", function() {
        theShip.command(command.CCW);
        expect(shipDirection.counterclockwise).toHaveBeenCalled();
    });

    it("Command forward moves to a new space", function() {
        theShip.command(command.F);
        expect(shipPosition.getNeighbor).toHaveBeenCalledWith(direction.N);
    });
});