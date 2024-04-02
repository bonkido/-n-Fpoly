// readonly giống private
class person {
    readonly name : string;
    phone : number;

    constructor(name:string , phone:number){
        this.name = name;
        this.phone = phone;
    }
    getFullName(){
        return (`Tên của bạn là : ${this.name} , số điện thoại : ${this.phone}`);
    }
}
let user1 = new person('Thiên Phú',333376951);
// user1.name = 'Bon Kido';
user1.phone = 784868970;

console.log(user1.getFullName());

