function getOmitBy(object, callback){
 let result = {};
 for (let key in object) {
    if (callback(object[key])) {
        result[key] = object[key]
    }
 }
 return result;
}

module.exports = getOmitBy;
