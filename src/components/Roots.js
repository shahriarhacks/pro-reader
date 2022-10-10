import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'

const Roots = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Roots;