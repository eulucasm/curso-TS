import { soma } from './modulo.js';
import { soma2 } from './modulo.ts';

const result = soma(10, 20) as number; //as number é um time casting
console.log(result);

const result2 = soma2(20, 30);
console.log(result2);
