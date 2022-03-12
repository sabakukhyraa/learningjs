import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Merve", "Metin")

let user2 = new User(2, "Ali Kerem", "Ata")



userService.add(user1)
userService.add(user2)


console.log(userService.listUsers())





//prototyping
// let costumer1 = {id: 1, firstName: "Kerem"}
// costumer1.lastName = "Ata"
// console.log(costumer1.lastName)