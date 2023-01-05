interface CounterObj {
    [property: string]: any
}

interface Product {
    id: number,
    title: string
}

// creating new types based on a existing type
type Readonly<T> = {
    readonly [Property in keyof T] : T[Property]
}


let counter: Readonly<CounterObj>= {
    name : 2,
    age : "esi",
    istall: "yes"
}

let product: Readonly<Product>= {
    id: 2,
    title: "esi"
}


type ActionMap<T extends CounterObj> = {
    [property in keyof T]: T[property] extends undefined ? { type: property;  } : { type: property; payload: T[property]; }
  };

  export enum Types {
    Create = 'CREATE_COUNTER',
    Delete = 'DELETE_COUNTER',
    Add = 'ADD_COUNTER',
  }

// Counter
  type CounterPayload = {
    
  }

  export type CounterActions = ActionMap<CounterPayload>[keyof ActionMap<CounterPayload>];
