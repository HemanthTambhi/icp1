import { useEffect, useState } from 'react'
import Header from '../components/common/Header'
import HeroSection from '../components/HeroSection'
import Footer from '../components/common/Footer'
import PartnerWithUs from '../components/PartnerWithUs'
import TrendingEvents from '../components/TrendingEvents'
import MasterverseExperience from '../components/MasterverseExperience'
import NearByPlaces from '../components/NearByPlaces'
import Featuredevents from '../components/Featuredevents'
import EventsWeek from '../components/EventsWeek'
import OrganizationLogos from '../components/OrganizationLogos'
import org1 from '../assets/images/org-1.png'
import org2 from '../assets/images/org-2.png'
import org3 from '../assets/images/org-3.png'

function Home() {

  const eventsDataTime = [
    { title: "Today", date: "Wed, 19 Mar" },
    { title: "Tomorrow", date: "Thu, 20 Mar" },
    { title: "Weekend", date: "22 - 23 Mar" },
  ];

  const organizationsData = [
    { name: "Brahma Kumaris", logo: org1 },
    { name: "OSHO", logo: org2},
    { name: "ISKCON", logo: org3 },
    { name: "Brahma Kumaris", logo: org1 },
    { name: "OSHO", logo: org2},
    { name: "ISKCON", logo: org3 },
  ];

  return (
    <>
      <main>
        <HeroSection/>
        <TrendingEvents/>
            {/* <MasterverseExperience/> */}
        <Featuredevents/>
        <NearByPlaces/>
        {/* <EventsWeek events={eventsDataTime} /> */}
        <OrganizationLogos organizations={organizationsData} />
      
      </main>
   
    </>
  )
}

export default Home
