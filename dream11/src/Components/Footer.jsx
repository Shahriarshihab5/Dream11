import React from 'react';

const Footer = () => {
  return (
    
    <div className="relative -mb-35 mt-20 z-10 border-1 border-white rounded-2xl py-6 mx-16  bg-white/20  ">
      <div className="max-w-5xl mx-auto p-8 rounded-xl shadow-xl bg-gradient-to-r from-blue-100 via-white to-orange-100">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Subscribe to our Newsletter
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="mt-6 flex justify-center">
  <div className='bg-white'>
  <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-md border bg-white  "
          />
  </div>
          <button className="bg-gradient-to-r from-pink-400 to-yellow-300 text-white px-4 py-2 rounded-r-md font-semibold hover:opacity-90 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
