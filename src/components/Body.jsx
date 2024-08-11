import React, { useState } from 'react'
import earch from '../images/Earth.mp4'
import Header from './Header';
import { Link } from 'react-router-dom';
import map from '../images/map2.png';
import { RxCrossCircled } from "react-icons/rx";
import { FaUndoAlt } from "react-icons/fa";


function Body() {
  const [remove,Setremove]=useState(false);
  const [Undo,Setundo]=useState(false);
 var removethealert = () =>
 {
     Setremove(!remove);
     Setundo(!Undo);
 }
 var undothealert = () =>
  {
      Setundo(!Undo);
     Setremove(!remove);

  }

  return (
    <div>
       <div><Header/></div>
        <div className='Body-container'>
              <div className='video'>
                  <video autoPlay loop muted  src={earch} className='earth-video'></video>
                 <div className='text'>
                  <div className={remove ? 'alert close-alert' : 'alert'} >
                       <div className='alert-bg'><div className='scroll-text'><marquee>***The flood situation in Assam remains critical with over 14 lakh people affected across 25 districts***    </marquee></div><div className='remove-alert'><RxCrossCircled onClick={removethealert} style={{cursor:"pointer"}}/></div></div>
                     
                  </div>
                    <div className={Undo?'undo open-alert':'undo'} onClick={undothealert}><FaUndoAlt  className='undo-icon'/></div>
                    <h1>Identify where your assistance is most valuable</h1>
                    <div className='viewmap'>
                    <Link to='/viewmap' className='viewlink'><div><h4>View Map</h4><img src={map} style={{width:"20px"}}></img></div></Link>
                    </div>  
                 </div>
              </div>
              
        </div>
    </div>
  )
}

export default Body