var clockwise = {};
var counterclockwise = {};

var handler = function(direction) {
    var that = {};
    
    that.clockwise = function() {
        return clockwise[direction];
    };

    that.counterclockwise = function() {
        return counterclockwise[direction];
    };

    return that;
};

var N = handler("N");
var E = handler("E");
var S = handler("S");
var W = handler("W");

clockwise.N = E;
clockwise.E = S;
clockwise.S = W;
clockwise.W = N;

counterclockwise.N = W;
counterclockwise.W = S;
counterclockwise.S = E;
counterclockwise.E = N;

module.exports.N = N;
module.exports.E = E;
module.exports.S = S;
module.exports.W = W;