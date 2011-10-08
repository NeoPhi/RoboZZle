describe("Ship", function() {
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

    describe("Rotate Left", function() {
        it("calls counterclockwise", function() {
            ship.command("L");
            expect(shipDirection.clockwise).not.toHaveBeenCalled();
            expect(shipDirection.counterclockwise).toHaveBeenCalled();
        });
    });

    describe("Rotate Right", function() {
        it("calls clockwise", function() {
            ship.command("R");
            expect(shipDirection.clockwise).toHaveBeenCalled();
            expect(shipDirection.counterclockwise).not.toHaveBeenCalled();
        });
    });
});