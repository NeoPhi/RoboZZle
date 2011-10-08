module.exports = (function() {
    var direction = require("direction");
    
    var that = {};

    var shipDirection;

    var setDirection = function(newDirection) {
        shipDirection = newDirection;
        return that;
    };

    var getDirection = function() {
        return shipDirection;
    };

    var rotateLeft = function() {
        setDirection(direction.counterclockwise[getDirection()]);
        return that;
    };

    var rotateRight = function() {
        setDirection(direction.clockwise[getDirection()]);
        return that;
    };
    
    var commands = {
        "L" : rotateLeft,
        "R" : rotateRight
    };

    var command = function(command) {
        return commands[command]();
    };

    that.setDirection = setDirection;
    that.getDirection = getDirection;
    that.command = command;

    return that;
}());