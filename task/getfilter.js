function getFilter(arr, predicate) {
    if (typeof predicate === 'function') {
        return arr.filter(predicate);
    }
    if (Array.isArray(predicate)) {
        let x = [];
        arr.forEach(item => {
          for (key in item) {
            if (predicate[0] === key && item[key] === predicate[1])       {
           x.push(item)
            }
          }
        });
        return x;
    }
    if (typeof predicate === 'object') {
        let x = [];
        arr.forEach(item => {
            if (item.age === predicate.age && item.active === predicate.active) {
              x.push(item);
          }
        })
        return x;
    }
    if (typeof predicate === 'string') {
        let x = [];
         arr.forEach(item => {
             if (item[predicate]) {
                x.push(item);
             }
         })
        return x;
    }

}

module.exports = getFilter;