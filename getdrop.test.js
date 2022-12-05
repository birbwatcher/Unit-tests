const getdrop = require('./task/getdrop.js');

test(
    'Checking without parameter',
    () => {
        expect(getdrop([1, 2, 3])).toStrictEqual([2, 3]);
    },
);


test(
    'Slice from second element',
    () => {
        expect(getdrop([1, 2, 3], 2)).toStrictEqual([3]);
    },
);

test(
    'Slice unreachable value',
    () => {
        expect(getdrop([1, 2, 3], 5)).toStrictEqual([]);
    },
);

test(
    'Checking that array have only numbers',
    () => {
        expect(getdrop([1, 2, 3], 0)).toStrictEqual([1, 2, 3]);
    },
);