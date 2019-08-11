class Vehicle {
    name = "";
    wheels = 0;
    seats = 0;

    constructor() {
    }

    getName() {
      return this.name;
    }

    setName(name) {
        this.name = name;
    }

    get wheels() {
        return this.wheels;
    }

    set wheels(value) {
        this.wheels = value;
    }

    get seats() {
        return this.seats;
    }

    set seats(value) {
        this.seats = value;
    }
}

class Car extends Vehicle {
    type = 'car';

    constructor(name) {
        super();
        this.seats = 4;
        this.wheels = 4;
        this.setName(name);
    }
}

class MotorCycle extends Vehicle {
    type = 'motorCycle';

    constructor(name) {
        super();
        this.seats = 2;
        this.wheels = 2;
        this.setName(name);
    }
}

class VehiclesCtrl {
    vehicleTypes = ['car', 'motorCycle'];
    selectedVehicleType = 'car';
    vehicleName = '';
    vehiclesList = [];

    constructor() {
        const accord = new Car();
        console.log(accord instanceof Car);
    }

    create() {
        if (this.selectedVehicleType === 'car') {
            this.vehiclesList.push(new Car(this.vehicleName));
        } else {
            this.vehiclesList.push(new MotorCycle(this.vehicleName));
        }
    }
}

angular
    .module('vehicles', [])
    .controller('vehiclesCtrl', VehiclesCtrl);
