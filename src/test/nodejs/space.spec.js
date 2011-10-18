describe("Sapce", function() {
    var space = require("space");
    var direction = require("direction");
    var star = require("star");

    var a;
    var b;

    beforeEach(function() {
        a = space.create();
        b = space.create();
    });

    it("knows thy neighbor", function() {
        a.setNeighbor(direction.N, b);
        expect(a.getNeighbor(direction.N)).toEqual(b);
    });

    it("acts like a graph", function() {
        a.setNeighbor(direction.N, b);
        b.setNeighbor(direction.E, a);
        expect(a.getNeighbor(direction.N).getNeighbor(direction.E)).toEqual(a);
    });

    it("can have a star", function() {
        var aStar = star.create();
        expect(a.setStar(aStar).getStar()).toEqual(aStar);
    });

    it("visits its star when you visit it", function() {
        expect(a.setStar(star.create()).visit().getStar().isVisited()).toBeTruthy();
    });
});
