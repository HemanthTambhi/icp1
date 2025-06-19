import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserLayout from '../../utils/Layout/UserLayout';
import Home from '../../pages/Home';

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />} >
            <Route index element={<Home />} />
            <Route path='*' element={<Navigate to={'/'} replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default AppRoutes