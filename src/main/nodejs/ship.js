module.exports = (function() {
    var that = {};

    var direction;

    var setDirection = function(newDirection) {
        direction = newDirection;
        return that;
    };

    var getDirection = function() {
        return direction;
    };

    var rotateLeft = function() {
        return setDirection(getDirection().counterclockwise());
    };

    var rotateRight = function() {
        return setDirection(getDirection().clockwise());
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