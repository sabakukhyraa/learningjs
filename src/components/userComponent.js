import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let new1 = new User(1, "Jack", "Reacher", "LA", 32)

//prototyping
// let costumer1 = {id: 1, firstName: "Kerem"}
// costumer1.lastName = "Ata"
// console.log(costumer1.lastName)

console.log("\n---------------------------------\n")

userService.load()
console.log(userService.customers)
console.log(userService.employees)

