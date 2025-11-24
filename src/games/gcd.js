import readlineSync from 'readline-sync'
import {userName} from './cli.js'
import {logic} from '../index.js'
console.log('Find the greatest common divisor of given numbers.');
export default () => {
let t = true;
for (let i = 0; i < 3 && t === true; i++) {
let num1 = Math.floor(Math.random() * 100 + 1);
let num2 = Math.floor(Math.random() * 100 + 1);

let quest = readlineSync.question(`Question: ${num1} ${num2}: `);

while (num2 > 0) {
    let b = num2;
    num2 = num1 % num2; 
    num1 = b;   
}
t = logic(Number(quest), num1)
}

if (t === true) {
    console.log(`Congratulations, ${userName}!`);
}

}
