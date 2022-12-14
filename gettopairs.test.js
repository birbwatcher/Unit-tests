const getToPairs = require('./task/gettopairs.js');

function Foo() {
    this.a = 1;
    this.b = 2;
  }

Foo.prototype.c = 3;

test(
    'Trying to create array from new object',
    () => {
        expect(getToPairs(new Foo)).toStrictEqual([['a', 1], ['b', 2]]);
    },
);