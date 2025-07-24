import React, { useEffect, useState } from 'react';
import Player from './player';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Players = ({ handlePurchase }) => {
  const [selectedTab, setSelectedTab] = useState('available');
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleRemovePlayer=(playerId) => {

    setSelectedPlayers(selectedPlayers.filter((p)=>p.id !==playerId));

  }

  const handleSelectedPlayer = (player) => {
    const alreadySelected = selectedPlayers.find((p) => p.id === player.id);
    if (alreadySelected) {
      showErrorAlert(`${player.name} is already selected!`);
      return false;
    }
  
    const success = handlePurchase(player.price);
    if (!success) {
      showErrorAlert("Not Enough Coins");
      return false;
    }
  
    setSelectedPlayers([...selectedPlayers, player]);
    return true;
  };
  
  
  const showSuccessAlert = (playerName) => {
    toast.success(
      <>
        Congrats!<br />
        You have selected <strong>{playerName}</strong>
      </>,
      { autoClose: 3000 }
    );
  };

  // Error alert when not enough coins
  const showErrorAlert = (msg) => {
    toast.error(msg, { autoClose: 3000 });
  };


  const showLimitAlert = () => {
    toast.warn("❌ You cannot select more than 6 players!", { autoClose: 3000 });
  };

  useEffect(() => {
    fetch('/player.json')
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-10">
      {}
      <ToastContainer position="top-center" />

      <div className="sticky top-12 z-50 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-black font-bold text-lg">
          <h1 className="text-center sm:text-left w-full sm:w-auto">
            {selectedTab === 'available'
              ? 'Available Players'
              : `Selected Players (${selectedPlayers.length}/6)`}
          </h1>

          <div className="flex border-2 rounded-2xl overflow-hidden">
            <button
              onClick={() => setSelectedTab('available')}
              className={`cursor-pointer px-4 py-1 transition-colors duration-200 ${
                selectedTab === 'available'
                  ? 'bg-yellow-300 text-black'
                  : 'bg-white text-gray-500'
              }`}
            >
              Available
            </button>

            <button
              onClick={() => setSelectedTab('selected')}
              className={`cursor-pointer px-4 py-1 transition-colors duration-200 ${
                selectedTab === 'selected'
                  ? 'bg-yellow-300 text-black'
                  : 'bg-white text-gray-500'
              }`}
            >
              Selected ({selectedPlayers.length})
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {selectedTab === 'available' &&
          players.map((player, idx) => (
            <Player
              key={idx}
              player={player}
              handleSelectedPlayer={handleSelectedPlayer}
              selectedCount={selectedPlayers.length}
              isSelectedTab={false}
              showSuccessAlert={showSuccessAlert}
              showLimitAlert={showLimitAlert}
              showErrorAlert={showErrorAlert}
            />
          ))}

{selectedTab === 'selected' && (
  <>
    {selectedPlayers.map((player, idx) => (
      <Player
        key={idx}
        player={player}
        selectedCount={selectedPlayers.length}
        isSelectedTab={true}
        handleRemovePlayer={handleRemovePlayer}
        showSuccessAlert={showSuccessAlert}
        showLimitAlert={showLimitAlert}
        showErrorAlert={showErrorAlert}
      />
    ))}

  
    <div className="">
      <button
        onClick={() => setSelectedTab('available')}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-200"
      >
        Add More Players
      </button>
    </div>
  </>
)}


      </div>
    </div>
  );
};

export default Players;
