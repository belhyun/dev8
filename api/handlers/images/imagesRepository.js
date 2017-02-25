import _ from "underscore"
export function projects(query, page) {
    return {
        q : query,
        sort : "appreciations",
        time : "today",
        page : _.isUndefined(page) ? 0 : page
    };
};

