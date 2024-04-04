"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(Logstring) {
    return function (constructor) {
        console.log(Logstring);
        console.log(constructor);
    };
}
let Person1 = class Person1 {
    constructor() {
        this.name = 'Bôn kido';
        console.log('Chào mừng bon kido đã trở lại');
    }
};
Person1 = __decorate([
    Logger('Cập nhập thành công')
], Person1);
