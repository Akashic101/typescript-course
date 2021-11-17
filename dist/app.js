"use strict";
const e1 = {
    name: "David",
    privilege: ["create_server"],
    startDate: new Date(),
};
/*
The if-statement is called a "Type Guard" it will make sure that
functions will work, even when the arguments are of different types
*/
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        return +a + +b;
    }
}
function printEmployeeInfo(emp) {
    console.log("Name: " + emp.name); //this works since both types have a name-field
    /*
    This needs another type of type-check with the "in"-keywoard.
    It checks if the field you are looking for is in the object you want to check
    and allows you to use it inside the if-statement
    */
    if ("privilege" in emp) {
        console.log("Privileges: " + emp.privilege);
    }
    if ("startDate" in emp) {
        console.log("startDate: " + emp.startDate);
    }
}
printEmployeeInfo(e1);
class Car {
    drive() {
        console.log("Driving in a car...");
    }
}
class Truck {
    drive() {
        console.log("Driving in a truck...");
    }
    loadCargo(amount) {
        console.log("Loading " + amount + " of cargo");
    }
}
const v1 = new Car();
const v2 = new Truck();
/*
This is another type of type-check called "instanceof". It tells you
if an object is an instance of a certain type. "Instanceof" is
vanilla JS and also available in TS
*/
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
/*
Here we can check with a switch-statement which type of animal we
are dealing since both interfaces share the same (discriminated) property. Inside the
switch-statement we can then set a local variable to the needed value
*/
function moveAnimals(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runSpeed;
            break;
    }
    console.log("Moving at speed: " + speed);
}
/*
We can also create an object on the fly by writing it in {}
*/
moveAnimals({ type: "bird", flyingSpeed: 10000 });
/*
Here you see two types of Type-casting. The first one works by putting the specific type
in angle-brackets <> before the selector, this can however clash with frontends such as React

The second way uses the "as" at the end to specifically cast it to a certain type. Keep in mind
to add an ! at the end of the selector so TS knows that the element cannot be Null and definitely
exists in your code
*/
//const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
const userInputElement = document.getElementById("user-input");
userInputElement.value = "Hi there";
/*
This object must have an id-property, but the rest is all optional.
You can add as many properties as you want or none at all
*/
const errorBag = {
    id: "em1",
    errorMessage: "Not a valid email!",
    userName: "Must start with a captial character!",
};
//# sourceMappingURL=app.js.map