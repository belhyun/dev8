import { projects } from './imagesRepository';
import Behance from './Behance';
import _ from 'underscore';
let log = console.log.bind(console);

exports.images = function(req, res, next) {
    var keys = {
        "client_id": "rteQQ9wDq1mF84wiKzFWssSTkWzK2UQQ",
        "client_secret":""
    };
    var behance = new Behance(keys);
    behance.get('projects', projects("dog"), function(result){

        _.map(result, function(each) {
            var callback = function(result) {
                log(result);
            };
            behance.get("projects/"+each.id, callback);

        });
    });
};