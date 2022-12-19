const { mIncludes } = require('./servicemethods')

function getIncludes(collection, value, index) {
    if (Array.isArray(collection)) {
        return mIncludes(collection, value, index)
    }
    if (typeof collection === 'object') {
        for (key in collection) {
            return collection[key] === value;
        }
    }
    //looks like string.prototype methods is allowed :)
    if (typeof collection === 'string') {
        return collection.includes(value, index);
    }
}

module.exports = getIncludes;