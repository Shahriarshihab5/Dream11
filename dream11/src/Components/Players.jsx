import React, { useEffect, useState } from 'react';
import Player from './player';

const Players = () => {
  const [selectedTab, setSelectedTab] = useState('available');
  const selectedCount = 0;
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('/player.json')
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-10">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-black font-bold text-lg">
          <h1 className="text-center sm:text-left w-full sm:w-auto">
            {selectedTab === 'available'
              ? 'Available Players'
              : `Selected Players (${selectedCount}/6)`}
          </h1>

          <div className="flex border-2 rounded-2xl overflow-hidden">
            <button
              onClick={() => setSelectedTab('available')}
              className={`px-4 py-1 transition-colors duration-200 ${
                selectedTab === 'available'
                  ? 'bg-yellow-300 text-black'
                  : 'bg-white text-gray-500'
              }`}
            >
              Available
            </button>

            <button
              onClick={() => setSelectedTab('selected')}
              className={`px-4 py-1 transition-colors duration-200 ${
                selectedTab === 'selected'
                  ? 'bg-yellow-300 text-black'
                  : 'bg-white text-gray-500'
              }`}
            >
              Selected ({selectedCount})
            </button>
          </div>
        </div>
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {selectedTab === 'available' &&
          players.map((player, idx) => (
            <Player key={idx} player={player} />
          ))}
      </div>
    </div>
  );
};

export default Players;
