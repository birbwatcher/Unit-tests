function gettake(arr, len) {
    if (len === 0) {
       return [];
    } 
    if (!len) {
        return arr.slice(-1);
    }
    return arr.slice(-len);
}
module.exports = gettake;