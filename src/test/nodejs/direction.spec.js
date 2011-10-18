describe("Direction", function() {
    var direction = require("direction");

    describe("Counterclockwise", function() {
        it("from N ends up W", function() {
            expect(direction.N.counterclockwise()).toEqual(direction.W);
        });
        it("from W ends up S", function() {
            expect(direction.W.counterclockwise()).toEqual(direction.S);
        });
        it("from S ends up E", function() {
            expect(direction.S.counterclockwise()).toEqual(direction.E);
        });
        it("from E ends up N", function() {
            expect(direction.E.counterclockwise()).toEqual(direction.N);
        });
    });

    describe("Clockwise", function() {
        it("from N ends up E", function() {
            expect(direction.N.clockwise()).toEqual(direction.E);
        });
        it("from E ends up S", function() {
            expect(direction.E.clockwise()).toEqual(direction.S);
        });
        it("from S ends up W", function() {
            expect(direction.S.clockwise()).toEqual(direction.W);
        });
        it("from W ends up N", function() {
            expect(direction.W.clockwise()).toEqual(direction.N);
        });
    });
});
