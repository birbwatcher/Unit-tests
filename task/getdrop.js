const { mSlice} = require('./servicemethods')


function getdrop(arr, pos) {
    if (pos === 0) {
        return arr;
    }
    if (!pos) {
        return mSlice(arr, 1);
    }
    return mSlice(arr, pos);
}

module.exports = getdrop;
