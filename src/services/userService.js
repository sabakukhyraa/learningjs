import { users } from "../../data/users.js"

export default class UserService{

    constructor(loggerService) {
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }



    load () {
        for (const user of users) {
            switch (user.type) {
                case "Customer":
                    this.customers.push(user)
                    break;

                case "Employee":
                    this.employees.push(user)
                    break;    
            
                default:
                    this.errors.push(`Wrong user type for ${user.id}`)
                    break;
            }
        }
    }





    add (user) {
        // this.users.push(user)
        this.loggerService.log(user)
    }


    listUsers () {
        //return this.users
    }


    getById (Id) {
        //return this.users.find(u => u.id === Id)
    }
}