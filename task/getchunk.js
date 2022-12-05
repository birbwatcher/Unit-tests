
function getchunk(arr, length) {
    let result = [];
    for (let i = 0; i < arr.length; i+= length) {
        result.push(arr.slice(i, i + length));
    }
    return result;
}

module.exports = getchunk;