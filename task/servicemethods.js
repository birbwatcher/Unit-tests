function mPush(arr, item){
    arr[arr.length] = item;
  }

function mSlice(arr, from, to) {
if (to > arr.length || !to) {
    to = arr.length;
}
if (from < 0 && from >= -arr.length) {
    from = arr.length + from;
}
if (from < -arr.length) {
    return arr;
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

function mIncludes (arr, element, index) {
    if (Array.isArray(arr)) {
        if (!index) {
            index = 0;
        }
        for (let i = index; i<arr.length; i++) {
            if (arr[i] === element) {
                return true;
            }
        }
        return false;
    }
    if (typeof arr === 'string') {
        return arr.includes(element, index);
    }
}

module.exports = { mPush, mSlice, mFilter, mFind, mForEach, mIncludes }
