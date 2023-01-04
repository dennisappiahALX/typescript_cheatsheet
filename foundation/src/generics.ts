// implement dynamic passing of arguments - Generic classes
class KeyValuePair<K, V> {
    constructor (public key: K, public value: V ) {}

}

let pair = new KeyValuePair<string, number>("kofi", 4)



// Generic functions
class ArrayUtils {
    static wrapInArray<T>(value: T) {
        return [value]
    }
}

let numbers = ArrayUtils.wrapInArray<string>('kofi')


// Generic Interface

//api/vi/products
//api/v2/users

interface Result<T> {
    data: T | null
    error : string | null
}

function fetch <T> (url: string) : Result<T> {
    return { data: null , error : null};
}

interface User {
    username : string
}

interface Product {
    name : string
    title : string
}

let result = fetch<User> ('url');
result.data?.username


// Generic Constraints

function echo <T extends number | string> (value: T): T {
    return value
}

echo(7);

interface Person {
    name : string
    age : 30
}

function echoo <T extends Person> (value: T): T {
    return value
}

// echo(7);

class store <T> {
    private _objects : T [] = []

    add (obj: T) : void {
        this._objects.push(obj)
    }
}