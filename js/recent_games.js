var RecentGames = (function() {
    var constructor = function() {
    };
    constructor.prototype = {
        draw: function() {
            var compiled = _.template(this._getTemplate().text());
            var tbody = $('table#recent-games tbody');
            _.each(this._fetchDatas(), function(data) {
                var output = compiled(data);
                console.debug(output);
                tbody.append(output);
            });
        },
        _getTemplate: function() {
            return $('#recentGames');
        },
        _fetchDatas: function() {
            return [{
                "date": "05/07",
                "team": "team A",
                "score": "2-0"
            },{
                "date": "05/07",
                "team": "team B",
                "score": "0-2"
            },{
                "date": "05/07",
                "team": "team C",
                "score": "1-1"
            }];
        },
    };
    return constructor;
})();
