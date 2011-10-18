var direction = require("direction");

module.exports.create = function() {
    var that = {};

    var ship;
    var program;

    function findStars() {
        var stars = [];
        var visited = [];
        var spaces = [];
        function visit(space) {
            if (!space || space.visited) {
                return;
            }
            space.visited = true;
            spaces.push(space);
            var star = space.getStar();
            if (star && !star.added) {
                star.added = true;
                stars.push(star);
            }
            visit(space.getNeighbor(direction.N));
            visit(space.getNeighbor(direction.E));
            visit(space.getNeighbor(direction.S));
            visit(space.getNeighbor(direction.W));
        }
        visit(ship.getPosition());
        var i;
        for (i = 0; i < stars.length; i++) {
            delete stars[i].added;
        }
        for (i = 0; i < spaces.length; i++) {
            delete spaces[i].visited;
        }
        return stars;
    }

    function unvisitedStarCount(stars) {
        var count = 0;
        for ( var i = 0; i < stars.length; i++) {
            if (!stars[i].isVisited()) {
                count++;
            }
        }
        return count;
    }

    that.setShip = function(newShip) {
        ship = newShip;
        return that;
    };

    that.setProgram = function(newProgram) {
        program = newProgram;
        return that;
    };

    that.validate = function() {
        var stars = findStars();
        while (true) {
            if (unvisitedStarCount(stars) === 0) {
                return true;
            }
            var nextCommand = program.nextStep();
            if (!nextCommand) {
                return false;
            }
            ship.command(nextCommand);
        }
    };

    return that;
};
