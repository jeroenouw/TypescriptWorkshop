//// 1 Refreshment (basics)

interface Person1 {
  name: string,
  age: number,
  employeed: boolean
}

// Intersection

type A = {
  a: string;
}
type B = {
  b: string;
}

type C = A & B;

// function displayType1(arguments: C) {
//   console.log(arguments);
// }

// displayType1({a: 'test', b: 'test'});

// Union
// function displayType1(arguments: string | number) {
//   console.log(arguments);
// }

// displayType1(3);


// Generics
function displayType1<T>(arguments: T): T {
  return arguments;
}

displayType1<string>('sadasd');
