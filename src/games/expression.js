import readlineSync, { question } from 'readline-sync';
import {checking, logic} from '../index.js'


export default () => {
console.log("Welcome to the Brain Games!");
const userName = readlineSync.question('May I have your name?   ');
console.log('Hello, ' + userName + '!');
console.log('What is the result of the expression?');
//Создаем переменную для выхода из цикла, если ответ неправильный
let t = true;
//Проверяем 3 раза
for (let i = 0; i < 3 && t === true; i++) {
//Создаем два случайныйх числа
let num1 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let num2 = Math.floor(Math.random() * (100 - 1 + 1) + 1);

//Создаем 4 разные опперации и кладем их в массив
let operationPlus = `${num1} + ${num2}`;
let operationMinus = `${num1} - ${num2}`;
let operationMultiply = `${num1} * ${num2}`;
let operationMinus2 = `${num2} - ${num1}`;
const operations = [operationPlus, operationMinus, operationMinus2, operationMultiply];

//Генерируем рандомный индекс массива
let arrayIndex = Math.floor(Math.random()*operations.length)

//Обьявляем, каким должен быть результат выражения
let check = checking(num1, num2, arrayIndex);

//Обьявляем выражение для пользователя
let operation = operations[arrayIndex];
let quest = readlineSync.question(`Question: ${operation} `);

//Переводим ответ пользователя в числовой формат
let question = Number(quest);


//Проверяем правильность ответа
t = logic(question,check);

}

if (t === true) {
    console.log(`Congratulations, ${userName}!`);
} else {
    console.log(`Let's try again, ${userName}!`);
}

}
