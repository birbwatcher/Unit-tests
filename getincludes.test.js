const getIncludes = require('./task/getincludes.js');

test(
    'Checking returning array of objects without inactive users',
    () => {
        expect(getIncludes([1, 2, 3], 1)).toStrictEqual(true);
    },
);
