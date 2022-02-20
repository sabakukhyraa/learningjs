console.log("Merhaba Kodlama.io");

//

var myArray = ["Ali", "Kerem", "Ata"]

//

for(let i = 0; i < myArray.length; i++) {
   console.log(myArray[i])
}

//

let data = 23
data = "kanke"
console.log(data)

//

function averager(x, y) {
   return (x+y)/2
}

//

console.log(averager(10,20))

//

console.log(Boolean(isNaN(13)))

//

var features = {
   "id" : "Ali Kerem Ata",
   "nickname" : "Sabaku",
   "age" : 21,
   "skills" : ["HTML", "CSS", "Javascript", "React", "Python", "SQL"],
   "address" : {
      "street": "Selam-ı Ali Caddesi, Kevakip Zade Sokak",
      "suite": "Barış Apt.",
      "city": "Üsküdar/İstanbul"
      },
   "phone": +905535294835,
   }


function personer(feature, rate = 10) {
   console.log(features[feature] + " : " + rate)
}


personer("id", 10)


let str = "Hello World!"
console.log(str.indexOf("lo W"))

console.log(str.slice(2,5))



function stringExtractor(text, wantedText) {
   let theIndex = text.indexOf(wantedText)
   console.log(text.slice(theIndex, (theIndex + wantedText.length)))
   var text = text.replace(wantedText, "")
}


var myText = "good ye still deal you for true reserved wife What water held little"

stringExtractor(myText, "still deal ")

console.log(myText)



//    // {
//    //    console.log(onoff == 0)
//    // }
// {
//    var onoff = 2
// }
let onoff = 1

function engine() {

   console.log(onoff)

   if ((onoff == 1)) {
      console.log(onoff)
      onoff = 0
   } else if ((onoff == 0)) {
      console.log(onoff)
      onoff = 1
   }
}

engine()
engine()
// console.log(onoff)

let kkk = 1

function hehey() {
   if ((kkk < 2)) {
      console.log("oluyor")
   }
}

hehey()


let aText = "Unpleasant on you met my"

aText = aText.split(" ")
console.log(aText)



// let [(...dictKe)] = [...dictKe.values] 




// console.log(arrayKe[0])
// console.log(dictKe)
// console.log(document.body)


function showParams(id,...products) {
   console.log(id)
   console.log(products)
}


// showParams(dictKe.id, "MAT II", "FIZIK II", "AYRIK MATEMATİK", "BILGISAYAR PROGRAMLAMA II")

console.log(typeof showParams)


let arrayKe = ["benke", "senke"]
let dictKe = {
   "id" : 20210205003,
   "fullName" : "Ali Ata",
   "department" : "Information Systems Engineering",
   "Age" : 21,
   "address" : {
      "district" : "Üsküdar",
      "city" : "İstanbul",
      "country" : "Türkiye"
   },
   "contact" : {
      "phone" : "+905326459275",
      "email" : "aliatabusiness@gmail.com",
      "linkedIn" : "https://www.linkedin.com/in/ali-kerem-ata-11149521a"
   },
   "grade" : 3.23
}

console.log(dictKe.length)

// let dataArray = []

// for (i = 0; i < dictKe.length; i++) {
//    dataArray.push(dictKe[i])
// }

// console.log(dataArray)

