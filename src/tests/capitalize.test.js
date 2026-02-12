import capitalize from '../games/capitalize.js'

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает неверно')
}
if (capitalize('') !== '') {
  throw new Error('Функция работает неверно')
}
if (capitalize('hello world') !== 'Hello world') {
  throw new Error('Функция работает неверно')
}

console.log('Тесты отработали без ошибок')