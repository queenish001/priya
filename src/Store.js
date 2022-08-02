import React,{ createContext, useReducer } from 'react';
import Cookies from 'js-cookie';

export const Store = createContext();
const initialState = {

  cart: {
    userMessages: Cookies.get('userMessages')
      ? JSON.parse(Cookies.get('userMessages'))
      : []
     }

};

function reducer(state, action) {
  switch (action.type) {

    case 'USER_MESSAGE_SEND': {
      const newItem = action.payload;
      const userMessages = [...state.cart.userMessages, newItem];
      Cookies.set('userMessages', JSON.stringify(userMessages));
      return { ...state, cart: { ...state.cart, userMessages } };
    }

  
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
