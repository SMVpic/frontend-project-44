const test = (operation, check) => {
let quest = readlineSync.question(`Question: ${operation} `);
if (quest === operation) {
    console.log(correct)
} else {
console.log('mistake')
}

}