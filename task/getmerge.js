const { mPush } = require('./servicemethods')

function getMerge (obj1, obj2) {
    let obj = {}
    for (let key in obj1) {
    let result = [];
    let len = obj1['a'].length > obj2['a'].length ? obj1['a'].length : obj2['a'].length
    for (let i=0; i<len; i++) {
      let x = {};
      x = {...obj1['a'][i], ...obj2['a'][i]}
      mPush(result, x);
    }
    obj[key] = result;
    return obj
    }
}

module.exports = getMerge;