function getcompact(arr){
    return arr.filter((item) => typeof item === 'number' && item > 0)
}

module.exports = getcompact;