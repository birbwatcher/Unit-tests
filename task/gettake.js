const { mSlice} = require('./servicemethods')

function gettake(arr, len) {
    if (len === 0) {
       return [];
    } 
    if (!len) {
        return mSlice(arr, -1);
    }
    return mSlice(arr, -len);
}
module.exports = gettake;
