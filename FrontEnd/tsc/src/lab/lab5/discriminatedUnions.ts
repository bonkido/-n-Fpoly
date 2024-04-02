interface Bird {
    type: 'Bird';
    flyingSpeed : number;
}

interface Fish {
    type: 'Fish';
    swimmingSpeed : number;
}


type Animal = Bird | Fish;

function moveAnimal(animal: Animal){
    let speed;
    switch(animal.type){
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

