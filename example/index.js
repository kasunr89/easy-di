'use strict';

var di = require('../index');

di.initialize(__dirname);

const calculator = di.resolve('calc');
console.log(calculator.perform(1, 2, 'plus'));
console.log(calculator.perform(3, 2, 'mul'));


