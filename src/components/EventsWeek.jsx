
import React from "react";
import SectionHeader from "./common/SectionHeader";
import calu from '../assets/images/calu.png';

const EventsWeek = ({ events }) => {
  return (
    <section className="trending_events_section pt-0">
       <div className="container">
        <SectionHeader title={'Events this week'} url={calu}/>
            <div className="event_week_wrapper mt-4">
                {events.map((event, index) => (
                    <div key={index} className="event_week_wrap">
                    <h2 className="font-bold text-purple-700">{event.title}</h2>
                    <p className="text-gray-700">{event.date}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default EventsWeek;
