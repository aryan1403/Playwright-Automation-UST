

// import {name} from "../e";
import * as exp from "../exp";
import Person from "../oops";

const p = new Person('Arush', 43, 'Training'); // const -> final

// p = new Person('', 45, '');

// console.log(p.name);
// console.log(exp.a, exp.b, exp.c);

//console.log(name)

function identity1(value: any) { // any -> remove all the safety checks
    return value;
}

function identity<K>(value: K): K { //best approach
    return value;
}


function pair<K, V>(first: K, second: V): [K, V] {
    return [first, second];
}

console.log(pair<string, number>('Aaryan', 12343467));

const name = identity<string>("Aaryan");
const age = identity<number>(10);

const name1 = identity1("Aaryan");
const age1 = identity1(10);

console.log(name.toUpperCase());
console.log(age);


// console.log(name1.);
console.log(age1);

