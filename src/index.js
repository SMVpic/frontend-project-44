export const logic = (question, check) => {
        switch (question) {
            case check:
                console.log('Correct!');
                return true;
            default:
                console.log(`${question} is wrong answer ;(. Correct answer was ${check}`);
                return false;
        }
    }

    export const checking = (num1, num2, arrayIndex) => {
        if (arrayIndex === 0) {
            return  num1 + num2;
        } else if (arrayIndex === 1) {
            return  num1 - num2;
        } else if (arrayIndex === 2) {
            return  num2 - num1;
        } else {
            return  num2 * num1;
        }
    }

    