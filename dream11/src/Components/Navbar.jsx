import React from 'react';
import logo from '../assets/logo.png';
import coin from '../assets/coin_PNG36871.png';

const Navbar = ({ coinCount }) => {
    return (
        <div className='flex justify-between'>
            <div>
                <img src={logo} alt="Website Logo" />
            </div>
            <div className='flex gap-3 text-center justify-center items-center'>
                <h1>Home</h1>
                <h1>Fixture</h1>
                <h1>Teams</h1>
                <h1>Schedules</h1>
                <h1 className='flex gap-2 items-center border p-2 rounded-2xl h-10 font-bold text-black'>
                    {coinCount.toLocaleString()} Coin {/* Fixed method name and added space */}
                    <img className='h-8' src={coin} alt="Coin Icon" />
                </h1>
            </div>
        </div>
    );
};

export default Navbar;