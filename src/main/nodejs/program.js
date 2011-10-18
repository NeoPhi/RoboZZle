module.exports.create = function() {
    var that = {};

    var command = require("command");

    var functions = [];
    var currentFunction = 0;
    var currentCommand = -1;

    var getFunction = function(index) {
        return functions[index];
    };

    that.addFunction = function(func) {
        functions.push(func);
        return that;
    };

    that.getFunction = getFunction;

    that.nextStep = function() {
        var nextCommand;
        while (!nextCommand) {
            currentCommand++;
            nextCommand = getFunction(currentFunction).getCommand(currentCommand);
            if (!nextCommand) {
                return nextCommand;
            }
            if (nextCommand === command.F1) {
                currentFunction = 0;
                currentCommand = -1;
                nextCommand = null;
            }
        }
        return nextCommand;
    };

    return that;
};