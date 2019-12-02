// Parameter decorator function expects three arguments:
// - target: current object’s prototype
// - propertyKey: name of the method
// - index: position of the parameter in the argument array  

export default () => {
// ======== Part 4.1 ========
    // Goals:
    // Make a parameter decorator that updates the person to UPPERCASE.

    class PersonGenerator {
        persons: string[] = [];
        
        addPerson(person: string): void {
            this.persons.push(person);
        }
    }

    const personGenerator = new PersonGenerator();

    console.log('[Part 4.1]', personGenerator.addPerson('John'))
};
