const getPickBy = require('./task/getpickby.js');

 const object = { 'a': 1, 'b': '2', 'c': 3 };

test(
    'Trying to omit object',
    () => {
        expect(getPickBy(object, item => typeof item === 'number')).toStrictEqual({ 'a': 1, 'c': 3 });
    },
);
