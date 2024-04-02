// hàm static gọi tới class luôn không phải tạo biến new mới
class math {
   static pi:number = 3.14;
   public name:string = 'Hình chữ nhật';

    static getMath(radius:number){
        return this.pi * radius * radius
   }
}

console.log('Check pi : ' + math.getMath(2));