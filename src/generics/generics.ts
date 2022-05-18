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