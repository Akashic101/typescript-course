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
//# sourceMappingURL=app.js.map