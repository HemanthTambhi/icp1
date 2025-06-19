import React, { useEffect } from 'react';
import SectionHeader from './common/SectionHeader';
import cal from '../assets/images/cal.png';
import loc from '../assets/images/loc.png';
import event1 from '../assets/images/event-1.png';
import event2 from '../assets/images/event-2.png';
import event3 from '../assets/images/event-3.png';
import vasudev from '../assets/images/vasudev.png';
import ey from '../assets/images/fe-fire.png';
import { useDispatch, useSelector } from 'react-redux';
import { getNearbyPlacesThunk } from '../features/eventSlice';


const eventsData = [
  {
    id: 1,
    category: 'Category 1',
    image: event1,
    title: 'NH7 Weekender | Noida',
    date: 'March 29 | 5PM',
    location: 'The Great India Place Mall, Noida',
    price: '₹699',
  },
  {
    id: 2,
    category: 'Category 2',
    image: event2,
    title: 'Zamna India | Gurugram',
    date: 'March 29 | 4PM onwards',
    location: 'Open Grounds, Gymkhana Club, Gurugram',
    price: '₹2299 onwards',
  },
  {
    id: 3,
    category: 'Category 3',
    image: event3,
    title: 'Bollywood Takeover Friday Night @ Diablo, Delhi',
    date: 'March 21 | 9PM - March 22 | 1AM',
    location: 'Diablo, Delhi',
    price: 'Free',
  },
];

const NearByPlaces = () => {
  const { nearbyEvents } = useSelector((state) => state.event);
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getNearbyPlacesThunk());
  }, [dispatch]);
  console.log('Nearby Events',nearbyEvents)
  return (
    <section className='trending_events_section'>
      <div className='container'>
        <SectionHeader title='NEARBY PLACES'  url={ey} />
        <div className='vasudev_img'>
            <img src={vasudev} alt="" />
        </div>
        <div className='treanding_event_card_wrapper row'>
          {nearbyEvents?.map((event) => (
            <div className='col-lg-4' key={event.id}>
              <div className='treanding_event_card_wrap'>
                {/* <span className='badge_custom'>{event.category}</span> */}
                <img src={event.ipfsUrl} alt={event.name} />
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

export default NearByPlaces;