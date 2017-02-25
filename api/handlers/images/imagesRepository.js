import _ from "underscore"
export function projects(query, colorHex) {
    return {
        q : query,
        color_hex : colorHex,
        sort : "appreciations",
        time : "today",
        page : 0
    };
};

