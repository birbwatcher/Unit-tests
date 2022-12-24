const getchunk = require('./task/getchunk.js');

test(
    'Checking the Array with length 3',
    () => {
        expect(getchunk(['a', 'b', 'c', 'd'], 3)).toStrictEqual([['a', 'b', 'c'], ['d']]);
    },
);

test(
    'Checking the Array with length 2',
    () => {
        expect(getchunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual([['a', 'b'],['c', 'd']]);
    }
);

test(
    'Checking the array without an argument', 
    () => {
        expect(getchunk([1, 2, 3, 4, 5])).toEqual([[1], [2], [3], [4], [5]]);
    }
);

test(
    'Checking with empty array', 
    () => {
        expect(getchunk([])).toEqual([]);
    }
);
