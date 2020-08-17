import React from 'react';
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { removeReserve, updateAmountReserve } from '../../store/modules/reserve/actions';
import './style.css';

export default function Reservas() {

  const dispatch = useDispatch();
  const reserves = useSelector( state => state.reserve );

  function handleRemove(id){
    dispatch(removeReserve(id))
  }

  function decrementAmount(trip){
    dispatch(updateAmountReserve(trip.id, trip.amount - 1))
  }

  function incrementAmount(trip){
    dispatch(updateAmountReserve(trip.id, trip.amount + 1))
  }

  return (

   <div>
    <h1 className="title">Voce solicitou {reserves.length} reservas</h1>

    {reserves.map(reserve => (
      <div className="reservas" key={reserve.id}>
        <img
        src={reserve.image}
        alt={reserve.title}
        />
        <strong>{reserve.title}</strong>

        <div className='reserveSize'>
          <button type='button' onClick={() => decrementAmount(reserve)}>
            <MdRemoveCircle size={20} color='#242424' />
          </button>
            <input type='text' readOnly value={reserve.amount} />
          <button type='button' onClick={() => incrementAmount(reserve)}>
            <MdAddCircle size={20} color='#242424' />
          </button>
        </div>
        
        <button
        type="button"
        onClick={()=> handleRemove(reserve.id)}
        >
          <MdDelete size={20} color='red' />
        </button>
      </div>
    ))}

    <footer>
      <button type="button">Solicitar Reservas</button>
    </footer>

   </div>
 );
}