//// 2 Default/Utility types (medium/advanced)

interface Person2 {
  name: string,
  age: number,
  employeed: boolean,
}

// Partial
// function displayType2(arguments: Partial<Person2>) {
//   console.log(arguments);
// }

// displayType2({name: 'Jeroen'});


// Required
// function displayType2(arguments: Required<Person2>) {
//   console.log(arguments);
// }

// displayType2({name: 'Jeroen', age: 26, employeed: true});

// Readonly
// function displayType2(arguments: Readonly<Person2>) {
//   console.log(arguments);
// }

// Pick
// function displayType2(arguments: Pick<Person2, 'name' | 'age'>) {
//   console.log(arguments);
// }

// Omit
// function displayType2(arguments: Omit<Person2, 'employeed'>) {
//   console.log(arguments);
// }

// 
// type Person = Record<string, unknown>;
// const person2: Person = { 
//   'abc': { name: 'Jeroen', age: 26, employeed: true },
//   'def': { name: 'Jeroen', age: 26, employeed: true },
//   '3': { name: 'Jeroen', age: 26, employeed: true },
// }

// NonNullable
// type Temp = NonNullable<string | number | undefined | null>;

// Extract


// type ExtractCustom = Extract<keyof E, keyof F>;


// Exclude
// type E = {
//   a: string,
//   b: string,
//   c: string,
// }
// type F = {
//   b: string,
//   c: string,
//   d: string,
// }

// type ExcludeCustom = Exclude<keyof E, keyof F>;

// ReturnType
// type ReturnTypeCustom = ReturnType<() => string | number>