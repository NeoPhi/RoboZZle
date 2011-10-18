module.exports.create = function() {
    var that = {};

    function unvisitedStarCount(stars) {
        var count = 0;
        for ( var i = 0; i < stars.length; i++) {
            if (!stars[i].isVisited()) {
                count++;
            }
        }
        return count;
    }

    that.validate = function(stars, ship, program) {
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
