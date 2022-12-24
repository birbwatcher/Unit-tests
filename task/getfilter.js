const { mFilter, mForEach, mPush} = require('./servicemethods')


function getFilter(arr, predicate) {
    if (typeof predicate === 'function') {
        return mFilter(arr, predicate);
    }
    if (Array.isArray(predicate)) {
        let x = [];
        mForEach(arr, item => {
          for (key in item) {
            if (predicate[0] === key && item[key] === predicate[1])       {
           mPush(x, item)
            }
          }
        });
        return x;
    }
    if (typeof predicate === 'object') {
        let x = [];
        mForEach(arr, item => {
            if (item.age === predicate.age && item.active === predicate.active) {
              mPush(x, item);
          }
        })
        return x;
    }
    if (typeof predicate === 'string') {
        let x = [];
         mForEach(arr, item => {
             if (item[predicate]) {
                mPush(x, item);
             }
         })
        return x;
    }

}

module.exports = getFilter;
