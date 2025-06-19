import React, { useEffect } from 'react';
import SectionHeader from './common/SectionHeader';
import cal from '../assets/images/cal.png';
import loc from '../assets/images/loc.png';
import event1 from '../assets/images/event-1.png';
import event2 from '../assets/images/event-2.png';
import event3 from '../assets/images/event-3.png';
import ey from '../assets/images/ev-fire.png';
import { useDispatch, useSelector } from 'react-redux';
import { getEventListThunk } from '../features/eventSlice';


const TrendingEvents = () => {
  const { events } = useSelector((state) => state.event);
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getEventListThunk());
  }, [dispatch]);
  console.log('Events heree',events)
  return (
    <section className='trending_events_section'>
      <div className='container'>
        <SectionHeader title='Listing Events'  url={ey} />
        <div className='treanding_event_card_wrapper row'>
          {events?.map((event) => (
            <div className='col-lg-4' key={event.id}>
              <div className='treanding_event_card_wrap'>
                {/* <span className='badge_custom'>{event.category}</span> */}
                <img src={event.ipfsUrl} alt={event.description.split(' ').slice(0, 10).join(' ')} />
                <div className='treanding_event_card_wrap_content'>
                  <h5>{event.description.split(' ').slice(0, 6).join(' ')}...</h5>
                  <div>
                  <p><img src={cal} alt='calendar' /> {event.date}</p>
                  <p><img src={loc} alt='location' /> {event.location}</p>
                  <div className='treanding_event_card_wrap_content_down'>
                    <p>{event.price}</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingEvents;