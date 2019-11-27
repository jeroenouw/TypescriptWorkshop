// Objectives: 
// Create classes with typed properties and methods
// Add access modifiers to class members

export default () => {
  // ======== Part 3.1 ========
  // Goals:
  // Add explicit parameter type to the greet method
  // Add explicit return type to the greet method

  class MC {
    greet(event = 'party') {
      return `Welcome to the ${event}`;
    }
  }

  const mc = new MC();
  console.log('[Part 3.1]', mc.greet('show'));


  // ======== Part 3.2 ========
  // Goals:
  // Add explicit parameter types to constructor
  // Add typed parameters for storing values

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  const jane = new Person('Jane', 31);

  console.log('[Part 3.2]', `The new person's name is ${jane.name}.`);


  // ======== Part 3.3 ========
  // Goals:
  // Explicitly make the title and salary properties publicly available
  // Reduce class to three lines of code while maintaining functionality

  class Employee {
    title: string;
    salary: number;
    constructor(title: string, salary: number) {
      this.title = title;
      this.salary = salary;
    }
  }

  const employee = new Employee('Engineer', 100000);

  console.log('[Part 3.3]', `The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);


  // ======== Part 3.4 ========
  // Goals:
  // Make the Dog class inherit from Animal
  // Make the Cat class inherit from Animal
  // Make it so that the sound member cannot be publicly accessed

  class Animal {
    constructor(sound) {}
    speak() {
      console.log('[Part 3.4]', this.sound);
    }
  }

  class Dog {
    constructor() {
      super('woof!');
    }
  }

  class Cat {
    constructor() {
      super('meow!');
    }
  }

  const dog = new Dog();
  dog.speak();
  console.log(dog.sound); // Should return error

  const cat = new Cat();
  cat.speak();
  console.log(cat.sound); // Should return error

  // ======== Part 3.5 ========
  // Goals:
  // Make it so that the only the Desk and Chair classes can see the 
  //   manufacturer member

  class Furniture {
    constructor(manufacturer: string = 'IKEA') {}
  }

  class Desk extends Furniture {
    kind() {
      console.log('[Part 3.5]', `This is a desk made by ${this.manufacturer}`);
    }
  }

  class Chair extends Furniture {
    kind() {
      console.log('[Part 3.5]', `This is a chair made by ${this.manufacturer}`);
    }
  }

  const desk = new Desk();
  desk.kind();
  desk.manufacturer; // Should return error

  const chair = new Chair();
  chair.kind();
  chair.manufacturer; // Should return error

  // ======== Part 3.6 ========
  // Goals:
  // Eliminate the error without changing the references to `Student.school`

  class Student {
    public school: string = 'Harry Herpson High School';
    constructor(private name: string) {};
    introduction() {
      console.log('[Part 3.6]', `Hi, my name is ${this.name} and I attend ${Student.school}`);
    }
  }

  const student = new Student('Morty');
  console.log(Student.school);
  student.introduction();
}