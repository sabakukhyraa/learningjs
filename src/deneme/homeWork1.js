console.log("-----------------------------------JavaScript Homework 1--------------------------------------")

let isPrime

function findPrime(...numbers) {

    for (let i = 0; i < numbers.length; i++) {

        isPrime = true

        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i] % j == 0) {
                isPrime = false
            }
        }    

        if (isPrime) {
            console.log(`${numbers[i]} is Prime!`)
        }

        else {
            console.log(`${numbers[i]} is not Prime!`)
        }
            
    }
}

findPrime(3,4,5,6,7,8,9,10,11)