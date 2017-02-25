"use strict";

var _nodeBehanceApi = require("node-behance-api");

var _nodeBehanceApi2 = _interopRequireDefault(_nodeBehanceApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.images = function (req, res, next) {
    var behance = new _nodeBehanceApi2.default({ "client_id": "rteQQ9wDq1mF84wiKzFWssSTkWzK2UQQ" });
    _nodeBehanceApi2.default.initOptions();
    behance.get({
        api: _nodeBehanceApi2.default.APIS.GET_USER,
        params: { //or simply behance.get('user',
            user: 'deepakmshrma'

        }
    }, function (error, result) {
        if (error) console.log(error);else console.log(result);
    });
};