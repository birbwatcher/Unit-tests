const getDropWhile = require('./task/getdropwhile.js');

let users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];

test(
    'Checking returning array of objects without inactive users',
    () => {
        expect(getDropWhile(users, function(o) { return !o.active; })).toStrictEqual([{ 'user': 'barney',  'active': true }]);
    },
);

test(
    'Checking returning array without false users',
    () => {
        expect(getDropWhile(users, { 'user': 'pebbles', 'active': false })).toStrictEqual([{ 'user': 'barney',  'active': true },
        { 'user': 'fred', 'active': false }]);
    },
);

test(
    'Checking parameter as a array',
    () => {
        expect(getDropWhile(users, ['active', false])).toStrictEqual([{ 'user': 'barney',  'active': true }]);
    },
);

test(
    'Checking parameter as a string',
    () => {
        expect(getDropWhile(users, 'active')).toStrictEqual([{ 'user': 'barney',  'active': true }, { 'user': 'fred', 'active': false }, { 'user': 'pebbles', 'active': false }]);
    },
);
