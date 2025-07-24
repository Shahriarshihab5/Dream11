import React from 'react';
import img from '../assets/bg-shadow.png';
import img2 from '../assets/banner-main.png';

const Banner = ({ setCoinCount }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`, 
        backgroundSize: "cover",
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        borderRadius: "20px"
      }}
    >
      <div className='flex flex-col items-center gap-10 p-10'>
        <img className='h-32 w-32' src={img2} alt="Cricket Illustration" />
        <h1 className=''>Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p>Beyond Boundaries Beyond Limits</p>
<div className='border-2 border-yellow-300  p-2 rounded-2xl'>    
      <button 
          onClick={() => setCoinCount(prev => prev + 600000)}
          style={{ backgroundColor: '#E7FE29' }} 
          className=' cursor-pointer p-3 rounded-2xl text-black font-bold'
        >
          Claim Free Credit
        </button></div>
      </div>
    </div>
  );
};

export default Banner;