"use strict";
// class person { 
//     name : string;
//     age : number;
//     phone : string;
//     constructor(name:string , age:number , phone:string){
//         this.name = name;
//         this.age = age;
//         this.phone = phone;
//     }
//     getFullName(){
//         return (`${this.name} , ${this.age} , ${this.phone}`);
//     }
// }
//     let user = new person('bon',28,'0333376951');
//     console.log('Khách hàng : ' + user.getFullName());
// Learn pulic , private 
class hobbies {
    constructor(name, like, quantity) {
        this.name = name;
        this.like = like;
        this.quantity = quantity;
    }
    getFullHobbie() {
        return (`${this.name} like ${this.like} ${this.quantity} times`);
    }
}
let userHobbie = new hobbies('abc', 'play bolleyball', 2); // immutable
userHobbie.name = 'Thien Phu';
// userHobbie.like = 'play videogame';
console.log("check = " + userHobbie.getFullHobbie());
