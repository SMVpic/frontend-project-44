import readlineSync from 'readline-sync';
export default () => {
console.log("Welcome to the Brain Games!");
const userName = readlineSync.question('May I have your name?   ');
console.log('Hello, ' + userName + '!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');



//if(num % 2 === 0 && answer.toLowerCase() === 'yes') {
  //  console.log('Correct!')
//}

let correctAnswerYes = 'yes';
let correctAnswerNo = 'no';
let i = true;
let count = 0;
while (count < 3 && i === true) {
let num = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let answer = readlineSync.question(`Question:${num} `);
console.log(`Your answer:${answer}`);
if(num % 2 === 0 && answer.toLowerCase() === correctAnswerYes) {
    console.log('Correct!');
    i = true;
    count++;
} else if(num % 2 !== 0 && answer.toLowerCase() === correctAnswerNo) {
    console.log('Correct!')
    i = true;
    count++; 
} else if(num % 2 !== 0 && answer.toLowerCase() === correctAnswerYes){
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`)
    i = false;
    count = 5;
} else if(num % 2 === 0 && answer.toLowerCase() === correctAnswerNo)  {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`);
    i = false;
    count = 5;
} else {
    console.log(`${answer} is wrong answer ;( `);
    i = false;
    count = 5;
}
}
if(i === false) {
    console.log(`Let's try again, ${userName}!`);
} else {
console.log(`Congratulations, ${userName}!`);
}

}