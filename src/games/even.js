import readlineSync from 'readline-sync';
import {logic} from '../index.js'

export default () => {

console.log("Welcome to the Brain Games!");
const userName = readlineSync.question('May I have your name?   ');
console.log('Hello, ' + userName + '!');
console.log('What is the result of the expression?');
//Создаем переменную для выхода из цикла, если ответ неправильный
let t = true;

for (let i = 0; i < 3 && t === true; i++) {

//Создаем случайное число
let num = Math.floor(Math.random() * (100 - 1 + 1) + 1);

//Проверяем на четность наше рандомное число 
const trueOrFalse = (num) =>  num % 2 === 0;
let check = '';
if (trueOrFalse(num) === true) {
    check = 'yes';
} else {
     check = 'no';
}

//Узнаем у пользователя четное ли это число
let question = readlineSync.question(`Is it even: ${num}?`);

//Проверяем его ответ
t = logic(question,check);

}

if (t === true) {
    console.log(`Congratulations, ${userName}!`);
} else {
    console.log(`Let's try again, ${userName}!`);
}
}
