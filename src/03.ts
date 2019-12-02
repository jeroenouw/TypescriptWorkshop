// Method decorator function expects three arguments:
// - target: current object’s prototype
// - propertyKey: name of the method
// - descriptor: property descriptor of the method

// Method decorators allow us:
// - override a method’s function.
// - change its control flow
// - execute additional code before/after it runs.

// Objectives: 
// Try to create method decorator

export default () => {
    // ======== Part 3.1 ========
    // Goals:
    // See how the declaration of the 'PropertyDescriptor' is built
    // The enumerable decorator function should return an updated enumerable
    // The enumerable value can be changed outside of the function
    // Finish the decorator function
    // Add the decorater at the correct place

    class Greeting {
        public sayHello(message: string): string {
            return `Hello, ${message}`;
        }
    }

    function enumerable() {
        return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor {};
    }

    const greeting = new Greeting();

    console.log('[Part 3.1]', greeting.sayHello('this works')); 
    
    // ======== Part 3.2 ========
    // Goals:
    // Make a decorator that log a confirm message before executing the method.

    class PersonGenerator {
        persons: string[] = [];
        
        addPerson(person: string): void {
            this.persons.push(person);
        }
    }

    const personGenerator = new PersonGenerator();

    console.log('[Part 3.2]', personGenerator.addPerson('John')); 
}
