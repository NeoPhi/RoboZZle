module.exports = (function() {
    var direction = require("direction");
    
    var that = {};

    var shipDirection;

    var rotateLeftTable = {};
    rotateLeftTable[direction.N] = direction.W;
    rotateLeftTable[direction.W] = direction.S;
    rotateLeftTable[direction.S] = direction.E;
    rotateLeftTable[direction.E] = direction.N;

    var rotateRightTable = {};
    rotateRightTable[direction.N] = direction.E;
    rotateRightTable[direction.E] = direction.S;
    rotateRightTable[direction.S] = direction.W;
    rotateRightTable[direction.W] = direction.N;

    var setDirection = function(newDirection) {
        shipDirection = newDirection;
        return that;
    };

    var getDirection = function() {
        return shipDirection;
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