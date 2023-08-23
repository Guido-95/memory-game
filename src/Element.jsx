import React from 'react'
import element from '../assets/images/giochino.png';
import sequenza from '../assets/images/sequenza.png';
function Element({id,data,open,find,clickEl,stopCLick,level}) {
  let myStyle = {};
  if (level === 1) {
    myStyle = {
      width: 'calc(100% / 5 - 40px)',
    };
  } else if (level === 2) {
    myStyle = {
      width: 'calc(100% / 7 - 40px)',
    };
  } else if (level === 3) {
    myStyle = {
      width: 'calc(100% / 9 - 40px)',
    };
  }
  return (
    <div className={`element ${stopCLick ? 'stop-click ':''}${find  ? 'stop-click no-animation find-elements' : ''} ${open ? 'stop-click' :' '}`} style={myStyle} onClick={()=>clickEl(id,data)}>
      {(!open && !find) && <img src={element}/> || (open || find) && <img className='opacity' src={sequenza}/>}
      <div className={`emote ${open || find ? 'element-visible' : 'element-hidden'}`}>
        <img src={data}   />
      </div> 
    </div>
   
  )
}

export default Element