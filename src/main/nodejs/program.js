module.exports.create = function() {
    var that = {};

    var func = require("func");

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
        currentCommand++;
        console.log("function " + currentFunction);
        console.log("command " + currentCommand);
        console.log("function " + getFunction(currentFunction));
        console.log("command " + getFunction(currentFunction).getCommand(currentCommand));
        return getFunction(currentFunction).getCommand(currentCommand);
    };

    return that;
};