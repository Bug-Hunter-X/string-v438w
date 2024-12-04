function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
//Error: Argument of type 'string[]' is not assignable to parameter of type 'string'.
//console.log(greeter(user));

//Solution 1: Modify the function to accept an array
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(" ");
}
console.log(greeterArray(user)); //Correct

//Solution 2: Access an element from the array
console.log(greeter(user[0])); //Correct