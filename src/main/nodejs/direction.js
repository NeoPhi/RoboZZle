var counterclockwise = {};

var clockwise = {};

var N = "N";
var E = "E";
var S = "S";
var W = "W";

counterclockwise[N] = W;
counterclockwise[W] = S;
counterclockwise[S] = E;
counterclockwise[E] = N;

clockwise[N] = E;
clockwise[E] = S;
clockwise[S] = W;
clockwise[W] = N;

module.exports.N = N;
module.exports.E = E;
module.exports.S = S;
module.exports.W = W;
module.exports.counterclockwise = counterclockwise;
module.exports.clockwise = clockwise;