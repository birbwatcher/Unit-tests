const getOmit = require('./task/getomit.js');

const object = { 'a': 1, 'b': '2', 'c': 3 };

test(
    'Trying to omit object',
    () => {
        expect(getOmit(object, ['a', 'c'])).toStrictEqual({ 'b': '2' });
    },
);

test(
    'Trying string as an arument',
    () => {
        expect(getOmit(object, 'a')).toStrictEqual({ 'b': '2', 'c': 3 });
    },
);

