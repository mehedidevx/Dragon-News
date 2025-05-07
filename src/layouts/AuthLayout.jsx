import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
           <header className='container mx-auto py-5'>
            <Navbar></Navbar>
           </header>
           <main className='container mx-auto py-10'>
                <Outlet></Outlet>
           </main>
        </div>
    );
};

export default AuthLayout;