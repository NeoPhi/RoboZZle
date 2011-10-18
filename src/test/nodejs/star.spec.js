describe("Star", function() {
    var star = require("star");

    var a;

    beforeEach(function() {
        a = star.create();
    });

    it("starts off unvisited", function() {
        expect(a.isVisited()).toBeFalsy();
    });

    it("can be visited", function() {
        expect(a.visit().isVisited()).toBeTruthy();
    });
});