import Bulb_on from './assets/bulb_on.jpg'
import Bulb_off from './assets/bulb_off.jpg'
import { useState } from 'react';

function Bulb(){
    const[bulb_on,setBulb_on] = useState(false)

    return(
        <>
          <img src={bulb_on ? Bulb_on : Bulb_off} alt="bulb_image"/> 
          <button onClick={() => setBulb_on(true)} className='bg-orange-500'>click here to turn on the bulb</button> <br /> <br />
          <button onClick={() => setBulb_on(false)} className='bg-orange-500'>click here to turn off the bulb</button>
        </>
    );
}

export default Bulb;