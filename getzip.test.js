const getZip = require('./task/getzip.js');

test(
    'Checking function as argument',
    () => {
        expect(getZip(['a', 'b'], [1, 2], [true, false])).toStrictEqual([['a', 1, true], ['b', 2, false]]);
    },
);