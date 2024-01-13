import React from 'react'

import Header from '../containers/Header/Header';
import Footer from '../containers/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='root'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root