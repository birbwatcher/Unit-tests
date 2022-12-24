const getchunk = require('./task/getchunk.js');

const inputArray = ['a', 'b', 'c', 'd'];
const outputArray = [['a', 'b', 'c'], ['d']];

test(
    'Checking the Array with length 3',
    () => {
        expect(getchunk(inputArray, 3)).toStrictEqual(outputArray);
    },
);

test(
    'Checking the Array with length 2',
    () => {
        expect(getchunk(inputArray, 2)).toStrictEqual([['a', 'b'],['c', 'd']]);
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
