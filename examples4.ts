//// 4 Some new features

interface Person4 {
  name: string,
  age: number,
  employeed: boolean,
  hobbies: [
    {
      'hobby1'
    },
    {
      'hobby2'
    },
    {
      nestedHobbies: [
        {
          'nestedhobby1'
        }
      ]
    }
  ]
}

// const person: Person4 = { name: 'jeroen', age: 26, employeed: true, hobbies: [ { hobby1: ''}, { hobby2: ''}, {nestedHobbies: [ { 'nestedhobby1': {}}]}]}

// Optional chaining
if (person && person.hobbies && person.hobbies[2]) {

}

if (person?.hobbies?.[2]) {

}

// Nullish coalescing
// const nul = 0;
// const emptyString = '';
// const NaNvar = NaN;

// const test = nul || 2;
// const test2 = nul ?? 2;

// // Template literal
// type hello = 'Hello' | 'hello2';
// type world = `world`;

// type helloWorld = `${hello}${world}`

const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
});

person.on("lastNameChanged", (newValue) => {
  console.log(`firstName was changed to ${newValue}!`);
});
type PropEventSource<Type> = {
    on(eventName: `${string & keyof Type}Changed`, callback: (newValue: any) => void): void;
};

/// Create a "watched object" with an 'on' method
/// so that you can watch for changes to properties.
function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;
