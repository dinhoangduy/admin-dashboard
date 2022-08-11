import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Customer from '../pages/Customer'


import Dashboard from '../pages/Dashboard'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/customer' element={<Customer/>}/>
        </Routes>
    )
}

export default AppRoutes