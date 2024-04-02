function Log(target: any, propertyName: string | Symbol) {

console.log('Property decorator!'); console.log(target, propertyName);
}

class Product {
    @Log
    title: string;
    private _price1: number;

    set price1(val: number) { }
    constructor(t: string, p: number) {
        this.title = t;
        this._price1 = p;
        p;
    }
    getPriceWithTax() {}
}
