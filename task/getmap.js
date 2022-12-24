const { mPush, mForEach } = require('./servicemethods')

function getMap(collection, callback) {
 let result = [];
 if (typeof callback === 'string') {
    for (let i=0;i<collection.length;i++) {
        for (let key in collection[i]) {
            if (key === callback) {
                mPush(result, collection[i][key])
            }
        }
    }
 }
 if (Array.isArray(collection) && typeof callback != 'string') {
    result = [];
    for (let i=0;i<collection.length;i++) {
        mPush(result, callback(collection[i]))
    }
}
 if (typeof collection === 'object' && typeof callback === 'function') {
    result = [];
    for (let key in collection) {
        mPush(result, callback(collection[key]))
    }
 }
 return result;
}

module.exports = getMap;
