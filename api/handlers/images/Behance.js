var Behance, http;

http = require('http');

Behance = (function() {
    function Behance(keys) {
        this.keys = keys;
        this.apiUrl = 'http://www.behance.net/v2/';
    }

    Behance.prototype.get = function(method, opts, result) {
        var query_url;
        if (typeof opts === 'function') {
            result = opts;
            opts = void 0;
        }
        query_url = this.apiUrl + method + '?client_id=' + this.keys['client_id'];
        return http.get(query_url, function(res) {
            var data;
            data = '';
            res.on('data', function(chunk) {
                return data += chunk;
            });
            return res.on('end', function() {
                return result(JSON.parse(data));
            });
        });
    };

    return Behance;

})();

module.exports = Behance;

