//1 Задача
interface User {
    id:number,
    name:string,
    age?:number,
    email?:string,
    status?:Status
}

const tom:User = {id:1,name:'Tom'}
const sam:User = {id:2,name:'Sam',age:23,email:'sam@gmail.com'}

//5 Задача
enum UserRole {'Admin','User','Guest'}

//2 Задача
interface Admin extends User {
    role:UserRole
}

const admin:Admin = {
    id:3,
    name:'Admin',
    //role:'admin'если создавать без перечисления
    role:UserRole.Admin
}
//3 Задача

const userGreet = (user:User) => {
    if(user.age) {
        console.log(`Привет,${user.name}!Тебе ${user.age} лет`)
    }
    console.log(`Привет,${user.name}!`)
}

//6 Задача
const UserStatus = {
    Active:'active',
    Inactive:'inactive',
    Pending:'pending'
} as const

type UserStatusType = typeof UserStatus[keyof typeof UserStatus]
type UserStatusType2 = 'active' | 'inactive' | 'pending'

//7 Задача
class Car {
    make:string
    model:string
    year:number
    mileage:number = 0
    constructor(make:string,model:string,year:number) {
        this.make = make,
        this.model = model,
        this.year = year
    }
    drive(mileage:number):void {
        this.mileage += mileage
    }
    getDescription():string {
        return `Машина ${this.make}, модель ${this.model}, год выпуска ${this.year}, проехала:${this.mileage}`
    }
};
//Дополнительное
type Status = 'active' | 'inactive' | 0 | 1

const getStatus = (status:Status) => {
    return {
        status:status,
        name:'Matvey'
    }
}