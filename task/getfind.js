const { mFind } = require('./servicemethods')


function getFind(collection, predicate, index) {
    if (typeof predicate === 'function') {
        return mFind(collection, predicate, index);
    }
    if (Array.isArray(predicate)) {
        return mFind(collection, item => item[predicate[0]] === predicate[1], index)
    }
    if (typeof predicate === 'object') {
        let x = Object.keys(predicate);
        return mFind(collection, item => item[x[0]] === predicate[x[0]] && item[x[1]] === predicate[x[1]], index)
    }
    if (typeof predicate === 'string') {
        return mFind(collection, item => predicate in item, index)
    }
}

module.exports = getFind;