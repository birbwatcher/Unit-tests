const { mIncludes } = require('./servicemethods')


function getPick(object, paths) {
    let result = {};
    for (let key in object) {
        if (mIncludes(paths, key)){
            result[key] = object[key];
        }
    }
    return result;
}

module.exports = getPick;
