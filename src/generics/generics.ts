// generics 
// start with <> and capital letter T - sometimes it starts with T but you might see letters like: T, U, V
// generics types: T, U, V
// different conventions: S - state, P -props, SS - snapshot - generic types 
// keyof 
interface IFooBar {
    foo: string;
    bar: string;
}

const fooBars: Array<IFooBar> = [
    {
        foo: "foo1",
        bar: "bar1"
    },
    {
        foo: "i am foo two",
        bar: "i am bar two"
    },
    {
        foo: "foo three",
        bar: "bar three"
    }
]

// we don't need it
function sortByFoo(fooBars: Array<IFooBar>) {
    fooBars.sort((a, b) => {
        if (a.foo > b.foo) {
            return 1;
        }
        if (a.foo < b.foo) {
            return -1;
        }
        return 0;
    })
}

// we don't need it 
function sortByBar(fooBars: Array<IFooBar>) {
    fooBars.sort((a, b) => {
        if (a.bar > b.bar) {
            return 1;
        }
        if (a.bar < b.bar) {
            return -1;
        }
        return 0;
    })
}

// we don't need to write multiple functions for every interface type: foo, bar, cat
// we can only write generic function for all data - it is more efficient
// flexible sort function
// flexible and reusable code
function sortByKey<T>(data: Array<T>, key: keyof T) {
    data.sort((a, b) => {
        if (a[key] > b[key]) {
            return 1;
        }
        if (a[key] < b[key]) {
            return -1;
        }
        return 0;
    })
}

// Both fine: foo and bar are properties of IFooBar!
sortByKey<IFooBar>(fooBars, "foo")
sortByKey<IFooBar>(fooBars, "bar")

// TypeScript complains: cat is not a property of IFooBar!
sortByKey<IFooBar>(fooBars, "cat")


////////////////// 2 ///////////////////

// main class
class Animal {
    public legCount: number
    constructor(legCount: number) {
        this.legCount = legCount
    }
}

// extenstion of a class
class Cat extends Animal {
    constructor() {
        super(4)
    }
}

// extension of a class
class Monkey extends Animal {
    constructor() {
        super(2)
    }
}

// extension of a class
class Bacteria {

}

// we want to print out the legs of cat and monkey 
// we want to print out only one function that can print the legs of class Animal
// use generics to do it 

// T is not good enough
// use extends keyword
// TS will accept any type as long as any time extends Animal
function printLegCount<T extends Animal>(animal: T) {
    console.log(`My leg count is: ${animal.legCount}`)
}

const myCat = new Cat()
const myMonkey = new Monkey()

printLegCount(myCat)
printLegCount(myMonkey)


const myBacteria = new Bacteria()
// Argument of type 'Bacteria' is not assignable to parameter of type 'Animal'.
// Why? --> because class Bacteria does not extend Animal
printLegCount(myBacteria)
