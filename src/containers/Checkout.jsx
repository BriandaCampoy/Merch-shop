import React, { useContext } from 'react';
import '@styles/Checkout.css';
import { NavLink } from 'react-router-dom';
import AppContext from '../context/AppContext.js';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Checkout = () => {
  const { state, removeFromCart, changeCant } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.product.price * currentValue.cant;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const handleChangeCant = (item, value) => {
    const newItem = JSON.parse(JSON.stringify(item));
    if (newItem.cant + value === 0) {
      handleRemove(item);
    } else {
      newItem.cant += value;
      changeCant(newItem);
    }
  };
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Pedido - Merch - shop</title>
        </Helmet>
      </HelmetProvider>
      <div className="Checkout">
        <div className="Checkout-content">
          {cart.length > 0 ? (
            <h3> Lista de pedidos: </h3>
          ) : (
            <h3>Sin pedidos...</h3>
          )}
          {cart.map((item) => (
            <div className="Checkout-item" key={item.product.title}>
              <div className="Checkout-element">
                <h4>{item.product.title}</h4>
                <span>${item.product.price}</span>
                <div className="Checkout-element-cant">
                  <button
                    className="Checkout-element-remove"
                    onClick={() => handleChangeCant(item, -1)}
                  >
                    -
                  </button>
                  <span>{item.cant}</span>
                  <button
                    className="Checkout-element-add"
                    onClick={() => handleChangeCant(item, 1)}
                  >
                    +
                  </button>
                </div>
                <span className="Checkout-element-productTotal">
                  ${item.product.price * item.cant}
                </span>
              </div>
              <button type="button" onClick={() => handleRemove(item)}>
                <i className="fa fa-trash-alt" title="Eliminar" />
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>Precio total: ${handleSumTotal()}</h3>
            <NavLink to="/checkout/information">
              <button type="button">Continuar pedido</button>
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
