console.log("-----------------------------------OBJECT ORIENTED PROGRAMMING-----------------------------------")

class Costumer{
    constructor(id, nation, ratePoint) {
        this.id = id;
        this.nation = nation;
        this.ratePoint = ratePoint;
    }
}


class IndividualCostumer extends Costumer {
    constructor(id, fullName, age, ratePoint, nation) {
        super(id, nation, ratePoint);
        this.fullName = fullName;
        this.age = age;
    }
}


class CorporateCostumer extends Costumer {
    constructor(id, ratePoint, numberEmployees, companyName, nation) {
        super(id, nation, ratePoint);
        this.companyName = companyName;
        this.numberEmployees = numberEmployees;
    }
}



let Jonathan = new IndividualCostumer(20222000, "Jonathan Brick", 22, .8, "UK")

let getir = new CorporateCostumer(20222015, .9, 25, "getir", "TR")


console.log(Jonathan.age)
console.log("Çalışan sayısı: " + getir.numberEmployees)


// console.log(Jonathan.fullName)


// let aGuy = new Costumer(20210205003, "John Holland", 24, "UK")
// console.log(aGuy.nation)


//Prototyping
// aGuy.city = "Yorkshire" //Instance prototyping
Costumer.billCalculator = "Not right now!" //Class prototyping


//----------------------------------second-------------------------------------------


// class Customer {
//     constructor(id, customerNumber) {
//         this.id = id
//         this.customerNumber = customerNumber 
//     }
// }


// let customer1 = new Customer(1 , "202134")
//prototyping
// customer1.firstName = "Bahar" //instance prototyping
// console.log(customer1.firstName)

// Customer.something = "Something" //class prototyping
// console.log(customer1.something) //undefined