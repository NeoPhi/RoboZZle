module.exports.create = function() {
    var that = {};

    var visited = false;

    that.isVisited = function() {
        return visited;
    };

    that.visit = function() {
        visited = true;
        return that;
    };

    return that;
};
