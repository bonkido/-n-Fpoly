"use strict";
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'Bird':
            speed = animal.flyingSpeed;
            break;
        case 'Fish':
            speed = animal.swimmingSpeed;
            break;
        default:
            break;
    }
    console.log('Moving at speed ' + speed);
}
