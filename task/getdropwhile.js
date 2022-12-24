const { mFilter, mForEach, mPush, mIncludes} = require('./servicemethods')


function getDropWhile(arr, callback) {
    if (typeof callback === 'function') {
       let x = mFilter(arr, callback);
       return mFilter(arr, item => !mIncludes(x, item))
    }
    if (Array.isArray(callback)) {
        let x = [];
        mForEach(arr, item => {
          for (key in item) {
            if (callback[0] === key && item[key] != callback[1])       {
           mPush(x, item);
            }
          }
        });
        return x;
    }
    if (typeof callback === 'object') {
       return arr.filter(item => JSON.stringify(item) != JSON.stringify(callback))
    }
    if (typeof callback === 'string') {
        let x = [];
         arr.forEach(item => {
           for (key in item) {
             if (key === callback) {
                x.push(item);
             }
           }
         })
        return x;
    }
   }

module.exports = getDropWhile;
