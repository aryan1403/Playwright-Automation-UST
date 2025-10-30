export default class Person {
    public name: string; // accessible from anywhere
    private age: number; // accessed inside the class
    protected department: string; // accessed inside this & derived classes

    constructor(name: string, age: number, department: string) {
        this.name = name;
        this.age = age;
        this.department = department;
    }

    greet(): void {
        console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
    }
}

// class meow extends Person {
//     m1(): void {
//         const p3  = new Person('Arush', 30, 'Testing');
//         p3.
//     }
    
    
// }

const p1  = new Person('Aaryan', 34, 'Training');
const p2  = new Person('Arush', 30, 'Testing');

p1.greet();
p2.greet();