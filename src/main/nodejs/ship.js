var command = require("command");

module.exports.create = function() {
    var that = {};

    var direction;
    var position;

    var setDirection = function(newDirection) {
        direction = newDirection;
        return that;
    };

    var getDirection = function() {
        return direction;
    };

    var setPosition = function(newPosition) {
        position = newPosition;
        return that;
    };

    var getPosition = function() {
        return position;
    };

    var rotateClockwise = function() {
        return setDirection(getDirection().clockwise());
    };

    var rotateCounterclockwise = function() {
        return setDirection(getDirection().counterclockwise());
    };

    var moveForward = function() {
        return setPosition(getPosition().getNeighbor(getDirection()));
    };

    var commands = {};
    commands[command.CW] = rotateClockwise;
    commands[command.CCW] = rotateCounterclockwise;
    commands[command.F] = moveForward;

    var commandRunner = function(command) {
        commands[command]();
        if (getPosition()) {
            getPosition().visit();
        }
        return that;
    };

    that.setDirection = setDirection;
    that.getDirection = getDirection;
    that.setPosition = setPosition;
    that.getPosition = getPosition;
    that.command = commandRunner;

    return that;
};
