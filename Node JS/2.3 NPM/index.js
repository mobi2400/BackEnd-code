//var generateName = require('sillyname');

import generateName from "sillyname";
var sillyName = generateName();
console.log(`my name is ${sillyName}`);

import { randomSuperhero } from "superheroes";
const name = randomSuperhero();
console.log(`my name is ${name}`);