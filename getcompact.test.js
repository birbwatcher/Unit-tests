const getcompact = require('./task/getcompact.js');

test(
    'Checking that array have only numbers',
    () => {
        expect(getcompact([0, 1, false, 2, '', 3])).toStrictEqual([1, 2, 3]);
    },
);

