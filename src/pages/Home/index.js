import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import api from '../../services/api';
import { addReserve } from '../../store/modules/reserve/actions';
import './style.css';
import { MdFlightTakeoff } from 'react-icons/md';

export default function Home() {

  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadApi(){
      const response = await api.get('trips');
      setTrips(response.data);
    }

    loadApi();

  }, []);

  //Funcao handleAdd que lança um dispatch (com parametros obrigatorios type e o map)
  function handleAdd(trip){
    dispatch(addReserve(trip))
  }

 return (
   <div className='box'>
     {trips.map(trip => (
      <li key={trip.id}>
        <img src={trip.image} alt={trip.title}/>
        <strong>{trip.title}</strong>
        <span>Status: {trip.status ? 'Disponível' : 'Indosponível'}</span>

        <button
          type='button'
          onClick={() => handleAdd(trip) }
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