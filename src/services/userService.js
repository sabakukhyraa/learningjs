export default class UserService{

    constructor() {
        this.users = []
    }

    add (user) {
        this.users.push(user)
    }


    listUsers () {
        return this.users
    }


    getById (Id) {
        return this.users.find(u => u.id === Id)
    }
}