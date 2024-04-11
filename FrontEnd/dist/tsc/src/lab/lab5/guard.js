"use strict";
class Car {
    drive() {
        console.log('Xe đang chạy ...');
    }
}
class Truck {
    drive() {
        console.log('Xe đang có tai nạn ...');
    }
    loadCargo(amount) {
        console.log('Xe đang tải ... ' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
console.log(useVehicle);
