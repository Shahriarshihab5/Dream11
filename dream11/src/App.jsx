import Navbar from "./Components/Navbar"
import Banner from './Components/Banner'
import Players from "./Components/Players";
import Footer from "./Components/Footer";
import Footerb from "./Components/Footerb";


import { useState } from "react"

function App() {
 
  const [coinCount,setCoinCount]=useState(0);

  return (
    
 <div>
<div>
<div className="mx-20 my-5 text-slate-500">
 <Navbar coinCount={coinCount}/>
 <Banner  setCoinCount={setCoinCount}/>

 <Players/>

 <Footer></Footer>

  </div>

  <Footerb></Footerb>
</div>


 </div>
    
     
  
  )
}

export default App
