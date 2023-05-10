import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../context/AppContext.js';
import '@styles/Header.css';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <header className="Header">
      <NavLink to="/">
        <h1 className="Header-title">Merch-shop</h1>
      </NavLink>
      <div className="Header-checkout">
        <NavLink to="/checkout">
          <i className="fas fa-shopping-basket" title="Checkout" />
        </NavLink>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </header>
  );
};

export default Header;
