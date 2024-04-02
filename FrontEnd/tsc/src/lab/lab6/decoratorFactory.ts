function Logger(Logstring: string) {
    return function (constructor: Function) {
      console.log(Logstring);
      console.log(constructor);
    };
  }
  
  @Logger('Cập nhập thành công')
  class Person1 {
    name = 'Bôn kido';
  
    constructor() {
      console.log('Chào mừng bon kido đã trở lại');
    }
  }