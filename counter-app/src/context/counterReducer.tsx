import React from 'react'
import Counter from '../models/Counter'


type ActionMap<T extends { [property: string]: any }> = {
    [property in keyof T]: T[property] extends undefined ? { type: property;  } : { type: property; payload: T[property]; }
  };

  export enum Types {
    Increment = 'Increment_COUNTER',
    Decrement = 'Decrement_COUNTER',
    Delete = 'DELETE_COUNTER',
    Add = 'ADD_COUNTER',
    Reset = 'RESET_COUNTER'
  }

// Counter
  type CounterPayload = {
    [Types.Delete]: {id: number;},
    [Types.Increment] : {id: number},
    [Types.Decrement] : {id:number}
    [Types.Reset] : undefined;
  }

  export type CounterActions = ActionMap<CounterPayload>[keyof ActionMap<CounterPayload>];

  export const counterReducer = (state: Counter[], action: CounterActions | countActions) => {
    switch (action.type) {
      case Types.Delete:
        // return a new array of counters (Counter [{id... value]}) state different from initial state
        return [
          ...state.filter(counter => counter.id !== action.payload.id),
        ];
       
  // return a new array of counters with diffrent objects (Counter [{id... value]}) state different from initial state
      case Types.Increment: 
      const incrementedCounterArray = [...state].map(counter => {
        if (counter.id === action.payload.id) {
          return { ...counter, value: counter.value + 1 };
        }
        return counter;
      });

       return [
          ...incrementedCounterArray
       ]

       case Types.Decrement: 
       const decrementedCounterArray = [...state].map(counter => {
        if (counter.id === action.payload.id) {
          return { ...counter, value: counter.value - 1 };
        }
        return counter;
      });

       return [
          ...decrementedCounterArray
       ]

       case Types.Reset: 
       const resettedCounterArray = [...state].map(counter => {
        counter.value = 0;
        return counter
       })

       return [
          ...resettedCounterArray
       ]

      default:
        return state;
    }
  }
  
  // count
  type countPayload = {
    [Types.Add]: undefined;
  }

  export type countActions = ActionMap<countPayload>[keyof ActionMap<countPayload>];

  export const countReducer = (state: number, action: CounterActions | countActions) => {
    switch (action.type) {
      case Types.Add:
        return state + 1;
      default:
        return state;
    }
  }