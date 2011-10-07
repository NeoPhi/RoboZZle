module.exports = (function() {
    var that = {};

    var direction;

    var rotateLeftTable = {
        "N" : "W",
        "W" : "S",
        "S" : "E",
        "E" : "N"
    };

    var rotateRightTable = {
        "N" : "E",
        "E" : "S",
        "S" : "W",
        "W" : "N"
    };

    var setDirection = function(newDirection) {
        direction = newDirection;
        return that;
    };

    var getDirection = function() {
        return direction;
    };

    var rotateLeft = function() {
        setDirection(rotateLeftTable[getDirection()]);
        return that;
    };

    var rotateRight = function() {
        setDirection(rotateRightTable[getDirection()]);
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