import React from 'react';
import './Ticket.css'
import { add_ticket, remove_ticket } from '../Actions/TBasketAction';
import {useDispatch} from 'react-redux'

const Ticket = ({id,price,date,SeatNumber,left_image,right_image}) => {
    const dispatch = useDispatch()

    const addt = () => {
        dispatch(add_ticket(id,price,date,SeatNumber,left_image,right_image))
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
              <button onClick={addt} className='book'>BOOK NOW</button>
          </div>
      </div>
  );
};

export default Ticket;
