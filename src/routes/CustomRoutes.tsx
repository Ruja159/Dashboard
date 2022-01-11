import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Dashboard from "../pages/dashboard/Dashboard";
import Payment from "../pages/payment/Payment";

const CustomRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/" element={<Navigate replace to="/dashboard" />} />
        </Routes>
    );
}

export default CustomRoutes