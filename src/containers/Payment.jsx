import React, { useContext, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import '@styles/Payment.css';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const navigate = useNavigate();

  const paypalOtions = {
    clientId:
    import.meta.env.VITE_PAYPAL_API,
    intent: 'capture',
    currency: 'USD'
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + (currentValue.product.price)*(currentValue.cant);
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const handlePaymentSuccess = (data, actions) => {
        const newOrder = {
          buyer,
          product: cart,
          payment: data
        };
        addNewOrder(newOrder);
        navigate('/checkout/success');
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={`${item.product.title}-payment`}>
            <div className="Payment-element">
              <span>{item.cant}</span>
              <h4>{item.product.title}</h4>
              <span>${(item.product.price)*(item.cant)}</span>
            </div>
          </div>
        ))}
        <h4>Total ${handleSumTotal()}</h4>
        <div className="Payment-button">
          {/* Boton de pago con Paypal */}
          <PayPalScriptProvider options={{ 'client-id': 'test' }}>
            <PayPalButtons
              paypalOptions={paypalOtions}
              buttonStyles={buttonStyles}
              createOrder={(data, actions) => {
                return actions.order
                  .create({
                    purchase_units: [
                      {
                        amount: {
                          currency_code: 'USD',
                          value:handleSumTotal()
                        }
                      }
                    ]
                  })
                  .then((orderId) => {
                    // Your code here after create the order
                    return orderId;
                  });
              }}
              // onClick={() => console.log('Start Payment')}
              onApprove={(data) => handlePaymentSuccess(data)}
              onError={(error) => console.log("Hizo la tronacion ",error)}
              onCancel={(data) => console.log("Hizo la cancelacion", data)}
              style={{ layout: 'horizontal' }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payment;
