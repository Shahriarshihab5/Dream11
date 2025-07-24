import React from 'react';
import logo from '../assets/logo.png';
import coin from '../assets/coin_PNG36871.png';

const Navbar = ({ coinCount }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-4 py-2">
      <div className="flex justify-between items-center">
        <img src={logo} alt="Website Logo" className="h-10" />

        <div className="flex flex-wrap gap-4 items-center text-sm sm:text-base font-semibold">
          <button className="cursor-pointer">Home</button>
          <button className="cursor-pointer">Fixture</button>
          <button className="cursor-pointer">Teams</button>
          <button className="cursor-pointer"> Schedules</button>
       
          <div className="flex gap-2 items-center border p-2 rounded-2xl h-10 font-bold text-black bg-gray-100">
            {coinCount.toLocaleString()} Coin
            <img className="h-6" src={coin} alt="Coin Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
