function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {

    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

class Product1 {
    title: string;
    private _price2 : number;

    set price1(val: number) { }

    constructor(t: string, p: number) {
        this.title = t;
        this._price2 = p
        p;
    }

    @Log3
    getPriceWithTax() { }

}
