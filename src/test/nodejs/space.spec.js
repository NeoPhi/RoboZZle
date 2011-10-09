describe("Sapce", function() {
    var space = require("space");
    var direction = require("direction");

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
});