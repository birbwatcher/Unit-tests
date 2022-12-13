const { mPush } = require('./servicemethods')

function getMerge (obj1, obj2) {
    let obj = {}
    for (let key in obj1) {
        let result = [];
        let len = obj1[key].length > obj2[key].length ? obj1[key].length : obj2[key].length
        for (let i=0; i<len; i++) {
            let x = {};
            x = {...obj1[key][i], ...obj2[key][i]}
            mPush(result, x);
        }
        obj[key] = result;
    return obj
    }
}

module.exports = getMerge;