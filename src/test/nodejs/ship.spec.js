describe("Ship", function() {
    var direction = require("direction");
    var ship;

    beforeEach(function() {
        ship = require("ship");
    });

    describe("Rotate Left", function() {
        it("from N ends up W", function() {
            expect(ship.setDirection(direction.N).command("L").getDirection()).toEqual(direction.W);
        });
        it("from W ends up S", function() {
            expect(ship.setDirection(direction.W).command("L").getDirection()).toEqual(direction.S);
        });
        it("from S ends up E", function() {
            expect(ship.setDirection(direction.S).command("L").getDirection()).toEqual(direction.E);
        });
        it("from E ends up N", function() {
            expect(ship.setDirection(direction.E).command("L").getDirection()).toEqual(direction.N);
        });
    });

    describe("Rotate Right", function() {
        it("from N ends up E", function() {
            expect(ship.setDirection(direction.N).command("R").getDirection()).toEqual(direction.E);
        });
        it("from E ends up S", function() {
            expect(ship.setDirection(direction.E).command("R").getDirection()).toEqual(direction.S);
        });
        it("from S ends up W", function() {
            expect(ship.setDirection(direction.S).command("R").getDirection()).toEqual(direction.W);
        });
        it("from W ends up N", function() {
            expect(ship.setDirection(direction.W).command("R").getDirection()).toEqual(direction.N);
        });
    });
});