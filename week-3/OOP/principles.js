//The four fundamental OOP principles are inheritance, encapsulation, abstraction and polymorphism. You'll learn about each of these principles in turn

class Animal { /* ...class code here... */ }
var myDog = Object.create(Animal)
console.log (Animal)//[class Animal];
// A more common method of creating objects from classes is to use the new  keyword. When using a default or empty constructor method, JavaScript implicitly calls the Object superclass to create the instance.
class Animal1 { /* ...class code here... */ }

var myDog1 = new Animal1()

console.log (Animal1)

// To setup the inheritance relation between classes in JavaScript, I can use the extends keyword, as in class B extends A.

// Here's an example of an inheritance hierarchy in JavaScript:
// class Animal 
// class Bird extends Animal  
// class Eagle extends Bird
