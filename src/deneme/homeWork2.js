function isFriend(number1, number2) {
    
    let total1 = 0
    let total2 = 0

    for (let j = 1; j < number1; j++) {
        if (number1 % j == 0) {
            total1 += j
        }
    }

    for (let j = 1; j < number2; j++) {
        if (number2 % j == 0) {
            total2 += j
        }
    }

    if ((total1 == number2) && (total2 == number1)) {
        console.log("These are friend numbers!!!")
    }

    else {
        console.log("These are not friend numbers! :(")
    }
}

isFriend(284, 220)