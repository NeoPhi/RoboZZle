module.exports = (function() {
    var that = {};

    var func = require("func");

    var functions = [];
    functions[0] = func();

    that.getFunction = function(index) {
        return functions[index];
    };

    return that;
}());
