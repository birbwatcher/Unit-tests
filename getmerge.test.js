const getMerge = require('./task/getmerge.js');

let object = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
  };

  let other = {
    'a': [{ 'c': 3 }, { 'e': 5 }]
  };

test(
    'Trying to merge objects',
    () => {
        expect(getMerge(object, other)).toStrictEqual({ 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] });
    },
);