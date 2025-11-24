import readlineSync from 'readline-sync'
import {userName} from './cli.js'
import {logic} from '../index.js'


export default () => {
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let num;
let check = 'no';
let t = true;
for(let counter = 0; counter < 3 && t === true; counter++) {
    num = Math.floor(Math.random() * 100 + 1);
    let i = 2;
    let j = 0;

    while (i * i <= num && j != 1) {
        if(num % i !== 0){
            i++;
        } else {
            j++;
        }
    }

    if(j === 1) {
        check = 'no';
    } else {
        check = 'yes';
    }

console.log(`Question: ${num}`);
let question = readlineSync.question(`Answer: `);

t = logic(question.toLowerCase(), check);

}

if (t === true) {
    console.log(`Congratulations, ${userName}!`);
} else {
    console.log(`Let's try again, ${userName}!`);
}

}



