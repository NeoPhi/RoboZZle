module.exports = (function() {
    var that = {};

    var direction;

    var rotateLeftTable = {
        "N" : "W",
        "W" : "S",
        "S" : "E",
        "E" : "N"
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

    var commands = {
        "L" : rotateLeft
    };

    var command = function(command) {
        return commands[command]();
    };

    that.setDirection = setDirection;
    that.getDirection = getDirection;
    that.command = command;

    return that;
}());