import React from 'react'
import Counter from '../models/Counter'


type ActionMap<T extends { [property: string]: any }> = {
    [property in keyof T]: T[property] extends undefined ? { type: property;  } : { type: property; payload: T[property]; }
  };

  export enum Types {
    Delete = 'DELETE_COUNTER',
    Add = 'ADD_COUNTER',
  }

// Counter
  type CounterPayload = {
    [Types.Delete]: {
      id: number;
    }
  }

  export type CounterActions = ActionMap<CounterPayload>[keyof ActionMap<CounterPayload>];

  export const counterReducer = (state: Counter[], action: CounterActions | countActions) => {

    switch (action.type) {
      case Types.Delete:
        return [
          ...state.filter(counter => counter.id !== action.payload.id),
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