const getFilter = require('./task/getfilter.js');

let users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];

test(
    'Checking returning array of objects without inactive users',
    () => {
        expect(getFilter(users, function(o) { return !o.active; })).toStrictEqual([{ 'user': 'fred',   'age': 40, 'active': false }]);
    },
);

test(
    'Checking returning array of objects without inactive users',
    () => {
        expect(getFilter(users, { 'age': 36, 'active': true })).toStrictEqual([{ 'user': 'barney', 'age': 36, 'active': true }]);
    },
);

test(
    'Checking returning array of objects without inactive users',
    () => {
        expect(getFilter(users, ['active', false])).toStrictEqual([{ 'user': 'fred',   'age': 40, 'active': false }]);
    },
);

test(
    'Checking returning array of objects without inactive users',
    () => {
        expect(getFilter(users, 'active')).toStrictEqual([{ 'user': 'barney', 'age': 36, 'active': true }]);
    },
);