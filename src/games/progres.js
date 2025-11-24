import readlineSync from 'readline-sync'
import { userName } from './cli.js'
import { logic } from '../index.js'

export default () => {
  const array = []
  console.log('What number is missing in the progression?')
  let t = true

  for (let j = 0; j < 3 && t === true; j++) {
    // Генерируем стартовое число и разность двух соседних чисел
    let num1 = Math.floor(Math.random() * 100 + 1)
    let num2 = Math.floor(Math.random() * 10 + 1)
    let currentElement = 0
    for (let i = 0; i < 10; i++) {
      // Созадем текущий элемент
      currentElement = num1 + i * num2
      // Добавляем в массив
      array[i] = currentElement
    }
    // Заменяем рандомный элемент массива на пробел
    let arrayIndex = Math.floor(Math.random() * array.length)
    let check = array[arrayIndex]
    array[arrayIndex] = '..'
    // Разделяем массив запятыми и выводим пользователю
    let quest = array.join(' ')
    console.log(`Question: ${quest}`)
    let question = readlineSync.question(`Your answer: `)
    // Сверяем ответ
    t = logic(Number(question), check)
  }

  if (t === true) {
    console.log(`Congratulations, ${userName}!`)
  }
  else {
    console.log(`Let's try again, ${userName}!`)
  }
}
