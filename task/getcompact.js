const { mFilter} = require('./servicemethods')

function getcompact(arr){
    return mFilter(arr, ((item) => typeof item === 'number' && item > 0))
}

module.exports = getcompact;