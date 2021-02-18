//// 3 Build your own types / conditional types (advanced)

interface Person3 {
    name: string,
    age: number,
    employeed: boolean
}

function displayType3(arguments) {
  console.log(arguments);
}

displayType3({});

// Partial
type PartialCustom<T> = {
    [P in keyof T]?: T[P];
};

// const person3: PartialCustom<Person3> = { name: 'Jeroen', age: 26, employeed: true};

// Required
type RequiredCustom<T> = {
    [P in keyof T]-?: T[P];
};

// Readonly
type ReadonlyCustom<T> = {
    readonly [P in keyof T]: T[P];
};

// NonNullable
type NonNullableCustom<T> = T extends null | undefined ? never : T

// Readonly + Partial
type ReadonlyPartialCustom<T> = {
    readonly [P in keyof T]?: T[P];
};

// Conditional types

// T extends U ? X : Y

// type TypeName<T> = T extends string
//   ? "string"
//   : T extends number
//   ? "number"
//   : T extends boolean
//   ? "boolean"
//   : T extends undefined
//   ? "undefined"
//   : T extends Function
//   ? "function"
//   : "object";

// type newType = TypeName<boolean>
// type ReturnTypeCustom<T> = T extends (...arguments: any[]) => infer R ? R : any;
// type TestType = ReturnTypeCustom<{}>

type First<T extends any[]> = T extends [any, ...any[]] ? T[0] : never;
const array = [2, 3, 4];
type newType = First<typeof array>;