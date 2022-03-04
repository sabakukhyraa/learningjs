function isPrimeThousand() {

    let Prime
    let primesArray = []

    for (let i = 0; i < 1001; i++) {
        Prime = true
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                Prime = false
            }
        }
    
        if (Prime) {
            primesArray.push(i)
        }    
    }

    return primesArray
}

console.log(isPrimeThousand())