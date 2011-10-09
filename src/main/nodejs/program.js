module.exports = (function() {
    var that = {};

    var func = require("func");

    var functions = [];

    that.addFunction = function(func) {
        functions.push(func);
        return that;
    };

    that.getFunction = function(index) {
        return functions[index];
    };

    return that;
}());