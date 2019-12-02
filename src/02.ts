// Property decorator function expects two arguments:
// - target: current object’s prototype
// - propertyKey:  name of the property

// Objectives: 
// Try to create property decorator

export default () => {
    // ======== Part 2.1 ========
    // Goals:
    // Surround the 'chocolate' flavor property value with 🍦
    // Define a new property, with a getter, setter, enumerable and configurable
  
    class IceCream {
        @Emoji()
        flavor = 'chocolate';
    }

    function Emoji() {
        return function(target: any, propertyKey: string | symbol) {}
    }

    const iceCream = new IceCream();

    console.log('[Part 2.1]', iceCream.flavor); 

    // ======== Part 2.2 ========
    // Goals:
    // Make a decorator which logs the initial name and the new assigned name

    class Person {
        name = 'Bob';
    }
    
    const person = new Person();
    person.name = 'John';

    console.log('[Part 2.2]', person.name); 

  };
