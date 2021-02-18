//// 2 Default/Utility types (medium/advanced)

interface Person2 {
  name: string,
  age: number,
  employeed: boolean
}

// Partial
function displayType2(arguments) {
  console.log(arguments);
}

displayType2({});


// Required


// Readonly


// Pick


// Omit


// Record
// let person = {
//   0: { name: 'Jeroen', age: 26, employeed: true }
// }

// NonNullable


// Extract
// type ExtractCustom =


// Exclude
// type ExcludeCustom =

// ReturnType
// type ReturnTypeCustom =