class Dog {
    bark() { 
        console.log("Bark");
    }
}

class Cat {
    meow() { 
        console.log("meow");
    }
}

function makeSound(animal: Dog | Cat) {
    if(animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}

// makeSound(new Cat());

interface Admin {
    name: string;
    priviliges: string[];
}

interface User {
    name: string;
    email: string;
}

function printInfo(person: Admin | User) {
    if("priviliges" in person) {
        console.log(`Admin: ${person.name}, Priviliges: ${person.priviliges}`)
    } else {
        console.log(`User: ${person.name}, Email: ${person.email}`)
    }
}

printInfo({name: "Aaryan", email: "aaryan14032006@gmail.com"})
printInfo({name: "Arush", priviliges: ['create-server', 'admin-admin']})