console.log("------------------------ | MAP & FILTER & REDUCE | PRACTICES------------------------")

//<>

const objectArray = [
    {id : 1, name : "Ford", date : 2015},
    {id : 2, name : "Nissan", date : 1998},
    {id : 3, name : "Chev", date : 2011},
    {id : 4, name : "Toyota", date : 2016},
    {id : 5, name : "Volkswagen", date : 2021}
]


function spawnerLi(thing) {
    let list = []
    thing.map(object => list.push(object.name))
    return list 
}


// function looper(array) {
//     for (let i = 0; i < array.length; i++) {
//         let  = (`<li>${array[i]}</>`)
//     }
// }


let sendData = `
<ul>
    ${spawnerLi(objectArray).map(i => {
       return `\n<li>${i}</>\n`
    })}
</>
`

console.log(sendData)

document.body.innerHTML = sendData


// let listeee = []
// objectArray.map(object => listeee.push(object.name))


// for (let i = 0; i < spawnerLi(objectArray).length; i++) {
//     console.log(spawnerLi(objectArray)[i])

// }

// let listee = ["kerm", "sabak", 33, 66]

// objectArray.map(i => console.log(i.name))

    // console.log(objectArray.map(object=> object.name))


let filteredArray = objectArray.filter(i => (i.date > 2015))
console.log(filteredArray)


let a = ["a", "b", "c"]
a.splice(0,1)
console.log(a)
a[100] = "d"
console.log(a.length)

const [n] = a
console.log(n)


class X {
    get Y() {
        return 42;
    }
}


let x = new X()

console.log(x.Y)


setTimeout(() => {
    console.log("kerem"), 0
})

console.log("s")


