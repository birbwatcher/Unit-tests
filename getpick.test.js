const getPick = require('./task/getpick.js');

let object = { 'a': 1, 'b': '2', 'c': 3 };

test(
    'Trying to pick properties',
    () => {
        expect(getPick(object, ['a', 'c'])).toStrictEqual({ 'a': 1, 'c': 3 });
    },
);

test(
    'Trying to pick properties',
    () => {
        expect(getPick(object, 'b')).toStrictEqual({ 'b': '2' });
    },
);
