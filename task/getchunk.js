
const { mPush, mSlice} = require('./servicemethods')

function getchunk(arr, length = 1) {
    let result = [];
    for (let i = 0; i < arr.length; i+= length) {
        mPush(result, mSlice(arr, i, i + length));
    }
    return result;
}

module.exports = getchunk;
