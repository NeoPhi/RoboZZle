module.exports.create = function() {
    var that = {};

    var commands = [];

    that.addCommand = function(command) {
        commands.push(command);
        return that;
    };

    that.getCommand = function(index) {
        return commands[index];
    };

    return that;
};
