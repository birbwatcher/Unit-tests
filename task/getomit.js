const { mIncludes } = require('./servicemethods')

function getOmit(obj, paths) {
    let result = {};
     for (let key in obj) {
       if (!mIncludes(paths ,key)) {
         result[key] = obj[key];
       }
     }
    return result;
}

module.exports = getOmit;
