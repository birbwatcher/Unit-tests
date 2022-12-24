const getmap = require('./task/getmap.js');

function square(n) {
    return n * n;
}

const users = [
    { 'user': 'barney' },
    { 'user': 'fred' }
  ];

test(
    'Checking function as argument',
    () => {
        expect(getmap([4, 8], square)).toStrictEqual([16, 64]);
    },
);


test(
    'Checking object as a collection',
    () => {
        expect(getmap({ 'a': 4, 'b': 8 }, square)).toStrictEqual([16, 64]);
    },
);

test(
    'Checking string as an argument',
    () => {
        expect(getmap(users, 'user')).toStrictEqual(['barney', 'fred']);
    },
);
