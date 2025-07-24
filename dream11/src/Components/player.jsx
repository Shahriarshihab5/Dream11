import React from 'react';

const Player = ({
  player,
  handleSelectedPlayer,
  selectedCount,
  isSelectedTab,
  showSuccessAlert,
  showLimitAlert,
  handleRemovePlayer, 
  
}) => {
  return (
    <div>
      <div className="border p-4 border-gray-400 rounded-lg mt-8 bg-white shadow-md">
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-60 object-cover rounded-md"
        />

        <div className="font-black text-zinc-950 flex items-center gap-2 mt-4 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-black"
          >
            <path
              fill="currentColor"
              d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
            />
          </svg>
          <h2 className="text-xl font-bold">{player.name}</h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <div className="flex items-center gap-2">
            <ion-icon name="flag-outline"></ion-icon>
            <p className="text-sm sm:text-base">{player.country}</p>
          </div>
          <div className="border-2 border-gray-200 rounded-md px-3 py-1 bg-gray-200 text-black text-sm sm:text-base">
            Role: {player.role}
          </div>
        </div>

        <div className="border-t border-gray-300 my-4"></div>

        <h1 className="text-black font-bold mb-2">Rating</h1>
        <div className="flex justify-between text-sm sm:text-base">
          <p className="text-black font-bold">Playing Hand:</p>
          <p>{player.playingHand}</p>
        </div>

        {!isSelectedTab && (
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 my-4">
            <p className="text-black font-semibold text-sm sm:text-base">
              Price: ${player.price.toLocaleString()}
            </p>
            <button
              onClick={() => {
                if (selectedCount >= 6) {
                  showLimitAlert();
                  return;
                }

                const added = handleSelectedPlayer(player);
                if (added) {
                  showSuccessAlert(player.name);
                }

       
              }}
              className={`cursor-pointer border-2 border-gray-200 text-black rounded-md px-4 py-1 text-sm sm:text-base transition ${
                selectedCount >= 6
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-gray-100 hover:bg-yellow-300'
              }`}
            >
              Choose Player
            </button>
          </div>
        )}

{isSelectedTab && handleRemovePlayer && (
  <div className="flex justify-center mt-4">
    <button
      onClick={() => handleRemovePlayer(player.id)}
      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded transition duration-200"
    >
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zm5-7.1l1.9 1.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7l-1.9-1.9l1.9-1.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 11.1l-1.9-1.9q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l1.9 1.9l-1.9 1.9q-.275.275-.275.7t.275.7t.7.275t.7-.275z"/></svg>
    </button>
  </div>
)}



      </div>
    </div>
  );
};

export default Player;
