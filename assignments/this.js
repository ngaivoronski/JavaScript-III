/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. For functions created in the global scope, "this" refers to the window object
* 2. For functions in objects, "this" refers to the object before the "."
* 3. For functions in constructors, "this" refers to objects created by the constructors.
* 4. When "call" or "apply" are used, this refers to what's called.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function allCaps(text) {
    console.log(this);
    return text.toUpperCase();
}
allCaps("test");

// Principle 2

// code example for Implicit Binding

const dog = {
    sound: 'bark',
    speak: function() {
    console.log(`${this.sound}!`);
    console.log(this);
    }
};
dog.speak();

// Principle 3

// code example for New Binding

function NumberCreator(num) {
    this.number = num;
    this.evenOdd = function() {
        if (this.number % 2 == 0) {
            return (this.number.toString() + " is even");
        }
        else {
            return (this.number.toString() + " is odd");
        }
    };
}

const six = new NumberCreator(6);
const seven = new NumberCreator(7);

console.log(six.evenOdd());
console.log(seven.evenOdd());


// Principle 4

// code example for Explicit Binding

console.log(six.evenOdd.call(seven));