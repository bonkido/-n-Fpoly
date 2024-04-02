"use strict";
// hàm static gọi tới class luôn không phải tạo biến new mới
class math {
    constructor() {
        this.name = 'Hình chữ nhật';
    }
    static getMath(radius) {
        return this.pi * radius * radius;
    }
}
math.pi = 3.14;
console.log('Check pi : ' + math.getMath(2));
