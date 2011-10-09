module.exports = function() {
    var that = {};

    var neighbors = {};

    that.setNeighbor = function(direction, neighbor) {
        neighbors[direction] = neighbor;
        return that;
    };

    that.getNeighbor = function(direction) {
        return neighbors[direction];
    };

    return that;
};
