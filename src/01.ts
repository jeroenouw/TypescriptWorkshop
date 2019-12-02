// A decorator is a function that allows shorthand in-line modification of classes, properties, methods, and parameters.
// It helps to get the design type information at runtime
// Decorators are a proposed standard for ECMAScript 2016.

// All the decorators are 'Decorator Factories' and we can pass arguments to them.
// This is just meaning the decorator is wrapped in a function so we can pass custom arguments to it.
// You can also skip the outer function, if you don't want to have arguments.
// Example: @Component('do something') 

// Decorators are implemented for example by Angular:
// - for classes like @Component, @Injectable
// - for properties like @ViewChild, @Input, @Output
// - for methods like @HostListener, @HostBinding

// And also in Sequelize TypeScript:
// - for classes like @Table,
// - for properties like @Column, @UpdatedAt, @CreatedAt
// - for methods like @BeforeCreate, @BeforeUpdate

// Class decorator function expects one argument:
// - target: current object’s prototype

// Objectives: 
// Learn to make a class decorator by creating one yourself
// Enable the experimentalDecorators option in tsconfig.json

// NOTE: Please don't use a search engine for answers.
// For help: https://medium.com/iqoqo-engineering/understand-typescript-decorators-in-5-minutes-26ffc6189082

export default () => {
	// ======== Part 1.1 ========
	// Goals:
	// Let’s freeze the Frozen class to prevent inheritence.
	// Add the decorator at the correct place
	// Finish the decorator function

	class Frozen {}

	function frozen(target: Function) {
	}

	console.log('[Part 1.1]', Object.isFrozen(Frozen)); 

	// ======== Part 1.2 ========
	// Goals:
	// Let’s seal a class to prevent inheritence.
	// Create a class
	// Create an sealed class decorator
	// Add the decorator at the correct place
	// Put the check for the class if it is sealed in the console log

    console.log('[Part 1.2]', '<<Check if your class is sealed here>>'); 
    
	// ======== Part 1.3 ========
	// Goals:
	// Let’s inject properties into a class.
	// Create a class 
    // Create the decorator
    // Inject at least 3 properties into your class

    console.log('[Part 1.3]', '<<Check if your class contains a injected property here>>'); 
};
