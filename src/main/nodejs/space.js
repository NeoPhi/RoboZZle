module.exports.create = function() {
    var that = {};

    var neighbors = {};
    var star;

    that.setNeighbor = function(direction, neighbor) {
        neighbors[direction] = neighbor;
        return that;
    };

    that.getNeighbor = function(direction) {
        return neighbors[direction];
    };

    that.setStar = function(newStar) {
        star = newStar;
        return that;
    };

    that.getStar = function() {
        return star;
    };

    return that;
};
