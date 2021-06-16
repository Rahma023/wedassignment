function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}
//this is my callback function i named it as greetme
function greetme() {
    console.log("It is good to greet");
}
greet("Rahma", greetme); // i called my function and i have given it a value of my name and also my callback function


var lisaLab = {
    name: "bar",
    func: function() {
        var self = this;
         console.log("outer func:  this.name = " + this.name); 
         //for the "outer func" it prints out with the bar name because (this) and (self)
         // represents is the lisaLab who owns the name of bar
         console.log("outer func:  self.name = " + self.name);
         (function() {
            console.log("inner func:  this.name = " + this.name);
            // in this inner func it prints with the name of undefined because its function is an
            // immediately invoked function
            console.log("inner func:  self.name = " + self.name);
         }());
    }
};

lisaLab.func();
// this identifier has been used as actions that can be performed on the property of the object.
//it also used methods as functions stored in object properties.

