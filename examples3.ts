//// 3 Build your own types / conditional types (advanced)

interface Person {
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