import React, {useEffect} from 'react';
import Ticket from './Ticket';
import './Tickets.css'
import {gettickets} from '../Actions/TicketAction'
import {useSelector,useDispatch} from 'react-redux'


const Tickets = () => {

  const dispatch = useDispatch()
  const {tickets} = useSelector(state => state.tickets)

  useEffect(()=>{
    dispatch(gettickets())
  },[dispatch])

  return (
      <div className="ticket_container">
              {tickets.map((ticket) => (
                <div>
                <Ticket id={ticket._id} price={ticket.price} date={ticket.Date} left_image={ticket.left_image} right_image={ticket.right_image} SeatNumber={ticket.SeatNumber} />
                </div>
              ))}
      </div>
  );
};

export default Tickets;
