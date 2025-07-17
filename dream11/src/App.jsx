import Navbar from "./Components/Navbar"
import Banner from './Components/Banner'
import Players from "./Components/Players";


import { useState } from "react"

function App() {
 
  const [coinCount,setCoinCount]=useState(0);

  return (
    
  <div className="mx-20 my-5 text-slate-500">
 <Navbar coinCount={coinCount}/>
 <Banner  setCoinCount={setCoinCount}/>

 <Players/>
  </div>
    
     
  
  )
}

export default App
