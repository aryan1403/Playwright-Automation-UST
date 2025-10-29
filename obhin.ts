// let person = {
//     name: "Aaryan"
// }

let person: { name: string, age: number } = {
    name: "Aaryan",
    age: 34
};

// person.age = "23";

interface Person {
    name: string;
    age: number;
}

let user: Person = {
    name: "Aaryan",
    age: 34
};

console.log(user);

interface Emp {
    id: number;
    name: string;
    salary: number;
    department?: string; // optional
}

let emp1: Emp = { id: 1, name: "Aaryan", salary: 10, department: "Training"}; 
let emp2: Emp = { id: 2, name: "Arush", salary: 100}; 

interface Animal {
    name: string;
}

interface Dog {
    name: Animal;
    breed: string;
}

let a: Animal = {
    name: "Buddy"
}

let dog: Dog = {
    name: a,
    breed: "Golden Retriver"
}

console.log(dog.name.name)