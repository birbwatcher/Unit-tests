const gettake = require('./task/gettake.js');

test(
    'Checking without parameter',
    () => {
        expect(gettake([1, 2, 3])).toStrictEqual([3]);
    },
);

test(
    'Checking two last elements',
    () => {
        expect(gettake([1, 2, 3], 2)).toStrictEqual([2, 3]);
    },
);

test(
    'Checking if argument more the elements',
    () => {
        expect(gettake([1, 2, 3], 5)).toStrictEqual([1, 2, 3]);
    },
);

test(
    'Checking getting the black array',
    () => {
        expect(gettake([1, 2, 3], 0)).toStrictEqual([]);
    },
);