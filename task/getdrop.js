function getdrop(arr, pos) {
    if (pos === 0) {
        return arr;
    }
    if (!pos) {
        return arr.slice(1);
    }
    return arr.slice(pos);
}

module.exports = getdrop;