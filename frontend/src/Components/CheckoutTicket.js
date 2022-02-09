import React from 'react';
import './Ticket.css'
import {useDispatch} from 'react-redux'
import { add_ticket, remove_ticket } from '../Actions/TBasketAction';

const Ticket = ({id,left_image,right_image,date,price,SeatNumber}) => {

    const dispatch = useDispatch()


    const removet = () => {
        dispatch(remove_ticket(id))
    }

  return (
      <div className="ticket">
          <div className="first">
              <div className="ticket_date  bold">{date}</div>
              <div className='ticket_price bold'>${price}</div>
          </div>
          <div className="second">
              <div className='image1'>
                  <img src={left_image} alt="" />
              </div>
              <div className='bold '>VS</div>
              <div className='image2'>
                 <img src={right_image} alt="" />   
              </div>
          </div>
          <div className="third">
              <div className="seatNumber bold">Seat Number : {SeatNumber}</div>
          </div>
          <div className="fourth">
              <button onClick={removet}  className='book'>REMOVE</button>
          </div>
      </div>
  );
};

export default Ticket;
