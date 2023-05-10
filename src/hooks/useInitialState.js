import React, { useState } from 'react';
import initialState from '../initialState.js';
const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    const indexFind = state.cart.findIndex(
      (item) => item.product.id === payload.id
    );
    if (indexFind === -1) {
      setState({
        ...state,
        cart: [...state.cart, { product: payload, cant: 1 }]
      });
    }
  };
  const changeCant=(payload)=>{
    const indexFind = state.cart.findIndex(
      (item) => item.product.id === payload.product.id
    );
    const newItemsArray = Object.assign(state.cart);
    newItemsArray[indexFind] = payload
      setState({
        ...state,
        cart: newItemsArray
      })
  }
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.product.id !== payload.product.id)
    });
  };
  const addNewOrder = (payload) => {
    setState({ ...state, orders: [...state.orders, payload], cart:[] });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: payload
    });
  };

  return { addToCart, removeFromCart, addToBuyer, addNewOrder, changeCant, state };
};

export default useInitialState;
