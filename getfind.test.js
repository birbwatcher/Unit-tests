const getFind = require('./task/getfind.js');

let users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];


test(
    'Checking returning array of objects without inactive users',
    () => {
        expect(getFind(users, function(o) { return o.age < 40; })).toStrictEqual({ 'user': 'barney',  'age': 36, 'active': true });
    },
);

test(
  'Checking returning array of objects without inactive users',
  () => {
      expect(getFind(users, { 'age': 1, 'active': true })).toStrictEqual({ 'user': 'pebbles', 'age': 1,  'active': true });
  },
);

test(
  'Checking returning array of objects without inactive users',
  () => {
      expect(getFind(users, ['active', false])).toStrictEqual({ 'user': 'fred',    'age': 40, 'active': false });
  },
);

test(
  'Checking returning array of objects without inactive users',
  () => {
      expect(getFind(users, 'active')).toStrictEqual({ 'user': 'barney', 'age': 36, 'active': true });
  },
);