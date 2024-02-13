let bird = {
    hashWings: true,
    canFly: true,
    hasFeathers: true
}
let eagle1 = Object.create(bird);
console.log("eagle1 :", eagle1);
console.log("eagle1 has wings:", eagle1.hashWings);
console.log("eagle1 can fly :", eagle1.canFly);
console.log("eagle1 can feathers :", eagle1.hasFeathers);
let eagle2=Object.create(eagle1);
console.log("eagle2 can fly",eagle2.canFly);

let penguin1=Object.create(bird);
penguin1.canFly=false;
console.log(penguin1.canFly);
console.log(bird.canFly);