export default class UserService{

    constructor(loggerService) {
        this.users = []
        this.loggerService = loggerService
    }

    add (user) {
        this.users.push(user)
        this.loggerService.log(user)
    }


    listUsers () {
        return this.users
    }


    getById (Id) {
        return this.users.find(u => u.id === Id)
    }
}