module.exports.create = function() {
    var that = {};

    var functions = [];
    var currentFunction = 0;
    var currentCommand = -1;
    var stack = [];

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
                if (stack.length === 0) {
                    return nextCommand;
                }
                var oldState = stack.pop();
                currentFunction = oldState.currentFunction;
                currentCommand = oldState.currentCommand;
            } else if (nextCommand.isFunction()) {
                stack.push({
                    currentFunction : currentFunction,
                    currentCommand : currentCommand
                });
                currentFunction = nextCommand.number() - 1;
                currentCommand = -1;
                nextCommand = null;
            }
        }
        return nextCommand;
    };

    return that;
};
