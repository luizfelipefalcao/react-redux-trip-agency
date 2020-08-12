import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './style.css';
import { MdFlightTakeoff } from 'react-icons/md';

export default function Home() {

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadApi(){
      const response = await api.get('trips');
      setTrips(response.data);
    }

    loadApi();

  }, []);

 return (
   <div className='box'>
     {trips.map(item => (
      <li key={item.id}>
        <img src={item.image} alt={item.title}/>
        <strong>{item.title}</strong>
        <span>Status: {item.status ? 'Disponível' : 'Indosponível'}</span>

        <button
          type='button'
          onClick={() => {}}
        >
          <div>
            <MdFlightTakeoff size={20} color='#eee'/>
          </div>
          <span>Solicitar Reserva</span>
        </button>

      </li>
     )) }
   </div>
 );
}