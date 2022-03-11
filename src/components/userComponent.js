import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("Component is loaded")

let userService = new UserService()

let user1 = new User()



userService.add("kerem")
userService.getById(2)
userService.listUsers()