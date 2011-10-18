var command = function(name, functionValue) {
    var that = {};

    that.isFunction = function() {
        return false;
    };

    that.toString = function() {
        return name;
    };

    return that;
};

var func = function(number) {
    var that = command("F" + number);

    that.isFunction = function() {
        return true;
    };

    that.number = function() {
        return number;
    };

    return that;
};

module.exports.CW = command("CW");
module.exports.CCW = command("CCW");
module.exports.F = command("F");
module.exports.F1 = func(1);
module.exports.F2 = func(2);
