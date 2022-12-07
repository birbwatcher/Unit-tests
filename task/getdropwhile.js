function getDropWhile(arr, callback) {
    if (typeof callback === 'function') {
       let x = arr.filter(callback);
       return arr.filter(item => !x.includes(item))
    }
    if (Array.isArray(callback)) {
        let x = [];
        arr.forEach(item => {
          for (key in item) {
            if (callback[0] === key && item[key] != callback[1])       {
           x.push(item)
            }
          }
        });
        return x;
    }
    if (typeof callback === 'object') {
       return arr.filter(item => JSON.stringify(item) != JSON.stringify(callback))
    }
    if (typeof callback === 'string') {
        let x = [];
         arr.forEach(item => {
           for (key in item) {
             if (key === callback) {
                x.push(item);
             }
           }
         })
        return x;
    }
   }

module.exports = getDropWhile;