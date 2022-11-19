import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import {isMobile , isFirefox, isChrome} from 'react-device-detect';
import * as rdd from 'react-device-detect';
import Popup from './Popup.js';



function App() {
  rdd.isMobile = false;
      const [popup, setButtonPopup] = useState(false);

  if (isMobile) { 
    return (      
    <Popup  trigger={true} setTrigger = {setButtonPopup}>
      <h1> This content is only suppported on desktop browser</h1>
    </Popup> )

  } else if (!isChrome && !isFirefox) {

    return (    <Popup trigger={true} setTrigger ={setButtonPopup}>
      <h1> This content is available only on Chrome and Firefox</h1>
    </Popup>)
  }

  return <h1> This is how the site appears normally on Chrome and Firefox </h1>

  
 

}



export default App;
