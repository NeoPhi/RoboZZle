describe("Ship", function() {
    var ship;

    beforeEach(function() {
        ship = require("ship");
    });

    describe("Rotate Left", function() {
        it("from N ends up W", function() {
            expect(ship.setDirection("N").command("L").getDirection()).toEqual("W");
        });
        it("from W ends up S", function() {
            expect(ship.setDirection("W").command("L").getDirection()).toEqual("S");
        });
        it("from S ends up E", function() {
            expect(ship.setDirection("S").command("L").getDirection()).toEqual("E");
        });
        it("from E ends up N", function() {
            expect(ship.setDirection("E").command("L").getDirection()).toEqual("N");
        });
    });
});