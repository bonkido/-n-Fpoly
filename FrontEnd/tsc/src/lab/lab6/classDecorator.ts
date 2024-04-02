function Logger1(constructor : Function){
    console.log('Loading ...');
    console.log(constructor);
}

@Logger1
class Person{
    name = "Max";
    constructor(){
        console.log('Đang tạo file ');
    }
}

const pers = new Person();
console.log(pers);