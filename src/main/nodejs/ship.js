module.exports = (function() {
    var command = require("command");

    var that = {};

    var direction;

    var setDirection = function(newDirection) {
        direction = newDirection;
        return that;
    };

    var getDirection = function() {
        return direction;
    };

    var rotateClockwise = function() {
        return setDirection(getDirection().clockwise());
    };

    var rotateCounterclockwise = function() {
        return setDirection(getDirection().counterclockwise());
    };

    var commands = {};
    commands[command.CW] = rotateClockwise;
    commands[command.CCW] = rotateCounterclockwise;

    var commandRunner = function(command) {
        return commands[command]();
    };

    that.setDirection = setDirection;
    that.getDirection = getDirection;
    that.command = commandRunner;

    return that;
}());