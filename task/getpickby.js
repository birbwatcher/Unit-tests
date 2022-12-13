function getPickBy(object, callback) {
    let result = {};
    for (key in object) {
        if (callback(object[key])) {
            result[key] = object[key]
        }
    }
    return result;
}

module.exports = getPickBy;