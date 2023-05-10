import React, { useContext } from 'react'
import Map from '../components/Map'
import AppContext from '../context/AppContext.js'
import useGoogleAddress from '../hooks/useGoogleAddress'
import '@styles/Success.css'
import { useNavigate } from 'react-router-dom'

const Success = () => {
  const {state} = useContext(AppContext)
  const {buyer}= state;
  const location = useGoogleAddress(buyer)
  const navigate = useNavigate();
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Gracias por tu compra!</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className="success-data">
          <p>{`Pedido a nombre de: ${buyer.name}`}</p>
        </div>
        <div className="Success-map">
          <Map data={location.map}/>
        </div>
        <button className="Success-button" onClick={()=>navigate('/')}>Seguir comprando</button>
      </div>
    </div>
  )
}

export default Success