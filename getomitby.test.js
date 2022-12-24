const getOmitBy = require('./task/getomitby.js');

const object = { 'a': 1, 'b': '2', 'c': 3 };

test(
    'Trying to omit object',
    () => {
        expect(getOmitBy(object, item => typeof item != 'number')).toStrictEqual({ 'b': '2' });
    },
);
