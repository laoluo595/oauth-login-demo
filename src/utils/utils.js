export const parsingGithubRes = function(s) {
    let str = s
    const r = {}
    const kvs = str.split("&")
    for (var i = 0, len = kvs.length; i < len; i++) {
        var kv = kvs[i].split("=");
        r[kv[0]] = kv[1];
    }
    return r
}