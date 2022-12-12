const { mIncludes } = require('./servicemethods')

function getIncludes(collection, value, index) {
    if (Array.isArray(collection)) {
        return mIncludes(collection, value, index)
    }
    if (typeof collection === 'object') {
        for (key in collection) {
            if (collection[key] === value) {
                return true
            } else return false;
        }
    }
    //looks like string.prototype methods is allowed :)
    if (typeof collection === 'string') {
        return collection.includes(value, index);
    }
}

module.exports = getIncludes;