class bon {
    name : string;
    phone : number ;
    age : number;

    constructor(name:string , phone:number , age:number){
        this.name = name;
        this.phone = phone;
        this.age = age;
    }

    fullName(){
        return `Họ và tên : ${this.name} , phone : ${this.age}`
    }
}

class dieu extends bon {
    readonly gender;

    constructor(name:string , phone:number , age:number , gender : string){
        super(name , phone, age)
        this.gender = gender;
    }

    fullName(){
        return  `${super.fullName()} -- đây là class của Dieu :  ${this.name} ,${this.phone} , ${this.age} , ${this.gender}`
    }
}

var contrai = new dieu('Báo' , 9999999999 , 20 , 'Nam')
contrai.age = 90

console.log(contrai.fullName());