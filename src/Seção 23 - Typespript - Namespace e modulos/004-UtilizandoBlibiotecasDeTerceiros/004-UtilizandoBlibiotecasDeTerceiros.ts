/*
Aula sobre Utilização de bibliotecas de terceiros com TypeScript:
*/

import validator from 'validator';
import _ from 'lodash';

console.log(validator.isEmail('lucas@gmail.com'));
console.log(_.clone([1, 2, 3, 4, 5, 6]));
