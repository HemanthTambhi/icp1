import React, { useEffect } from "react";
import fe1 from '../assets/images/fe1.png';
import fe2 from '../assets/images/fe2.png';
import fe3 from '../assets/images/fe3.png';
import fe4 from '../assets/images/fe4.png';
import cal from '../assets/images/cal.png';
import loc from '../assets/images/loc.png';
import SectionHeader from "./common/SectionHeader";
import ey from '../assets/images/fe-fire.png';
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedEventsThunk } from "../features/eventSlice";


const events = [
  {
    id: 1,
    title: "Monastery Retreat | Nepal",
    image: fe1, 
    category: "Category 1",
    categoryColor: "#5A5AE0",
    date: "March 29",
    time: "4PM onwards",
    venue: "Open Grounds, Gymkhana Club, Gurugram",
    price: "2299",
    categoryColor_bg: "#F5FCFE",
  },
  {
    id: 2,
    title: "Yamuna Aarti | Vasudev Ghat",
    image: fe2,
    category: "Category 1",
    categoryColor: "#5A5AE0",
    date: "March 22",
    time: "5PM onwards",
    venue: "DLF Tower 10th Road, Gurugram",
    price: "899",
    categoryColor_bg: "#F5FCFE",
  },
  {
    id: 3,
    title: "Omkareshwar | Madhya Pradesh",
    image: fe3,
    category: "Category 2",
    categoryColor: "#D66294",
    date: "January 26",
    time: "4PM",
    venue: "Online",
    price: "450",
    categoryColor_bg: "#FEF3F7",
  },
  {
    id: 4,
    title: "Kasthbanjan Dev | Salangpur",
    image: fe4,
    category: "Category 1",
    categoryColor: "#5A5AE0",
    date: "March 29",
    time: "5PM",
    venue: "The Great India Place Mall, Noida",
    price: "699",
    categoryColor_bg: "#F5FCFE",

  },
];

const Featuredevents = () => {
  const { featuredEvents } = useSelector((state) => state.event);
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getFeaturedEventsThunk());
  }, [dispatch]);
  console.log('Featured Events',featuredEvents)
  return (
    <div className="container">
    <SectionHeader title='Featured events' url={ey} />
      <div className="treanding_event_card_wrapper row pb-0">
      {featuredEvents?.map((event) => (
            <div className='col-lg-4' key={event.id}>
              <div className='treanding_event_card_wrap'>
                {/* <span className='badge_custom'>{event.category}</span> */}
                <img src={event.ipfsUrl} alt={event.name} />
                <div className='treanding_event_card_wrap_content'>
                  <h5>{event.description.split(' ').slice(0, 8).join(' ')}...</h5>
                  <div>
                  <p><img src={cal} alt='calendar' /> {event.date}</p>
                  <p><img src={loc} alt='location' /> {event.location}</p>
                  <div className='treanding_event_card_wrap_content_down'>
                    <p>{'Free'}</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Featuredevents;

