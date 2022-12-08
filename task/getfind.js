function getFind(collection, predicate, index) {
    if (typeof predicate === 'function') {
        return collection.find(predicate, index);
    }
    if (Array.isArray(predicate)) {
        return collection.find(item => item[predicate[0]] === predicate[1], index)
    }
    if (typeof predicate === 'object') {
        let x = Object.keys(predicate);
        return collection.find(item => item[x[0]] === predicate[x[0]] && item[x[1]] === predicate[x[1]], index)
    }
    if (typeof predicate === 'string') {
        return collection.find(item => predicate in item, index)
    }
}

module.exports = getFind;