import React from 'react'
import Header from '../../components/common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/common/Footer'
import PartnerWithUs from '../../components/PartnerWithUs'

const UserLayout = () => {
  return (
    <>
        <Header />
        <Outlet/>
        <PartnerWithUs/>
        <Footer/>
    </>
  )
}

export default UserLayout