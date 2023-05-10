import React, { useRef, useContext } from 'react';
import '@styles/Information.css';
import { NavLink, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const { cart, buyer } = state;
  const navigate = useNavigate();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone')
    };
    addToBuyer(buyer);
    navigate('/checkout/payment');
  };
  return (
    <div className="Information">
      <div className="Information-content">
      {buyer && 
      <div className="Information-PrevBuyer">
        <div className="Information-PrevBuyer--data">
          <p>Nombre: <span>{buyer.name}</span></p>
          <p>Direccion: <span>{buyer.address}</span></p>
          <p>Codigo postal: <span>{buyer.cp}</span></p>
        </div>
        <button className="Information-PrevBuyer--check" onClick={()=>  navigate('/checkout/payment')}>
          Usar esta informacion de compra
        </button>
      </div>
      }
        <div className="Information-head">
          <h2>Informacion de contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="email" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Dpto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <NavLink to="/checkout">Regresar</NavLink>
          </div>
          <div className="Information-next">
            <button type="button" className="" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div
            className="Information-item"
            key={`${item.product.title}-information`}
          >
            <div className="Information-element">
              <span>{item.cant}</span>
              <h4>{item.product.title}</h4>
              <span>${item.product.price * item.cant}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
