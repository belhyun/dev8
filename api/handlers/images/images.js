import { projects } from './imagesRepository';
import Behance from './Behance';
var keys = {
    "client_id": "rteQQ9wDq1mF84wiKzFWssSTkWzK2UQQ",
    "client_secret":""
};
var behance = new Behance(keys);

exports.images = function(req, res, next) {
    behance.get('projects', projects(req.query.query, req.query.page), function(resp){
        res.send(resp);
    });
};

exports.image = function(req, res, next) {
    behance.get("projects/" + req.params.id, function(project) {
        res.send(project);
    });
};