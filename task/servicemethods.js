function mPush(arr, item){
    arr[arr.length] = item;
  }

function mSlice(arr, from, to) {
if (to > arr.length) {
    to = arr.length;
}
let x = [];
let y = 0;
for (let i = from; i < to; i++) {
    x[y] = arr[i];
    y++
}
return x;
}

function mFilter(arr, callback) {
    let result = [];
    for (let i = 0; i<arr.length; i++) {
      if (callback(arr[i])) {
        result[result.length] = arr[i];
      }
    }
    return result;
}

function mFind(arr, callback) {
   for (let i = 0; i<arr.length; i++) {
     if (callback(arr[i])) {
      return arr[i];
     }
   }
}

function mForEach(arr, callback) {
    for (let i = 0; i < arr.length; i += 1) {
        callback(arr[i], i, arr);
    }
}

module.exports = { mPush, mSlice, mFilter }