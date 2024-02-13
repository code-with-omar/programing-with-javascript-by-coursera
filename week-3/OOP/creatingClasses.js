// class Train {
//     // The constructor will be used to build properties on the future object instance of the Train class.
//     // let's say that there are only two properties that each object instance of the Train class should have at the time it gets instantiated: color and lightsOn.
//     constructor(color, lightsOn) {
//         // First of all, notice that there is no function keyword. Also, notice that the keyword constructor is used to define this function
//         this.color = color;
//         this.lightsOn = lightsOn;
//     }
// }
// var myFirstTrain = new Train('red', false);
// console.log(myFirstTrain);



class Train1 {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);// print the object with values
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
var train4 = new Train1('red', false);

train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype();