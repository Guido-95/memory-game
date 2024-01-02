import {useState,useEffect} from 'react'
import './App.css'
import pinguino1 from '../assets/images/pinguino1.png';
import pinguino2 from '../assets/images/pinguino2.png';
import pinguino3 from '../assets/images/pinguino3.png';
import poro1 from '../assets/images/poro1.png';
import apina1 from '../assets/images/apina1.png';
import gattino1 from '../assets/images/gattino1.png';
import poro2 from '../assets/images/poro2.png';
import poro4 from '../assets/images/poro4.png';
import poro3 from '../assets/images/poro3.png';
import Element from './Element'
function App() {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  let elements = [
    {id:1,data:pinguino1,open:false,find:false},
    {id:2,data:pinguino2,open:false,find:false},
    {id:3,data:pinguino3,open:false,find:false},
    {id:4,data:poro1,open:false,find:false},
    {id:5,data:pinguino1,open:false,find:false},
    {id:6,data:pinguino2,open:false,find:false},
    {id:7,data:pinguino3,open:false,find:false},
    {id:8,data:poro1,open:false,find:false},
    {id:9,data:apina1,open:false,find:false},
    {id:10,data:apina1,open:false,find:false},
  ]
  let elements2 = [
    {id:1,data:pinguino1,open:false,find:false},
    {id:2,data:pinguino2,open:false,find:false},
    {id:3,data:pinguino3,open:false,find:false},
    {id:4,data:poro1,open:false,find:false},
    {id:5,data:pinguino1,open:false,find:false},
    {id:6,data:pinguino2,open:false,find:false},
    {id:7,data:pinguino3,open:false,find:false},
    {id:8,data:poro1,open:false,find:false},
    {id:9,data:apina1,open:false,find:false},
    {id:10,data:apina1,open:false,find:false},
    {id:11,data:gattino1,open:false,find:false},
    {id:12,data:gattino1,open:false,find:false},
    {id:13,data:poro2,open:false,find:false},
    {id:14,data:poro2,open:false,find:false},
  ]
  let elements3 = [
    {id:1,data:pinguino1,open:false,find:false},
    {id:2,data:pinguino2,open:false,find:false},
    {id:3,data:pinguino3,open:false,find:false},
    {id:4,data:poro1,open:false,find:false},
    {id:5,data:pinguino1,open:false,find:false},
    {id:6,data:pinguino2,open:false,find:false},
    {id:7,data:pinguino3,open:false,find:false},
    {id:8,data:poro1,open:false,find:false},
    {id:9,data:apina1,open:false,find:false},
    {id:10,data:apina1,open:false,find:false},
    {id:11,data:gattino1,open:false,find:false},
    {id:12,data:gattino1,open:false,find:false},
    {id:13,data:poro2,open:false,find:false},
    {id:14,data:poro2,open:false,find:false},
    {id:15,data:poro3,open:false,find:false},
    {id:16,data:poro3,open:false,find:false},
    {id:17,data:poro4,open:false,find:false},
    {id:18,data:poro4,open:false,find:false},
  ]
  shuffleArray(elements);
  const [win ,setWin] = useState(false);
  const [arrayData ,setArrayData] = useState([]);
  const [stopCLick ,setStopClick] = useState(false);
  const [level ,setLevel] = useState(1);
  const [dataElements ,setDataElements] = useState(elements);
  const clickElement = (id,data)=>{
    setArrayData((oldArray)=>{
      return [...oldArray,data]
    })
    setDataElements((oldElements) => 
      oldElements.map(el=>{
        if(el.id === id){
          return {...el, open:true}
        }
        return el;
      })
    )
    
  }
  useEffect(()=>{
    if(arrayData.length === 2 && arrayData[0] === arrayData[1]){
      setDataElements((oldElements=>{
        return oldElements.map(el=>{
          if(el.data === arrayData[0]){
            return {...el,find:true,open:false}
          }
          return el;
        })
      }))
      setArrayData([])
    }
    if(arrayData.length === 2 && arrayData[0] != arrayData[1]){
      setStopClick(true);
      setTimeout(() => {
        setDataElements((oldElements=>{
          return oldElements.map(el=>{
            if(el.data === arrayData[0] || el.data === arrayData[1] ){
              
              return {...el,find:false,open:false}
            }
            return el;
          })
        }))
        setStopClick(false)
      }, 2000);
      setArrayData([])
    }
  },[arrayData])
  useEffect(()=>{
    let checkWin = dataElements.filter(el=>{
      return el.find === false;
    })
    if(checkWin.length === 0){
      setTimeout(() => {
        if(level === 1){
          setLevel((old)=>{
            if(old === 1){
              console.log('livello2')
              shuffleArray(elements2)
              setDataElements(elements2)
              return old + 1;
            }
          })
        }
        if(level === 2){
          setLevel((old)=>{
            if(old === 2){
              console.log('livello3')
              console.log(level)
              shuffleArray(elements3)
              setDataElements(elements3)
              return  old + 1;
            }
          })
        }
        if(level === 3){
          setWin(true);
        }
      }, 2500);
      
    }
    
    console.log(level);
  },[dataElements])
  useEffect(()=>{
    if(level > 1){
      let elementLevelComplete = document.querySelector('.level-complete');
      elementLevelComplete.classList.add('animation-level-complete');
      setTimeout(() => {
        elementLevelComplete.classList.remove("animation-level-complete");
      }, 2000);
    }
  },[level])

  let myStyle = {};
  if (level === 1) {
    myStyle = {
      width: '50vw',
    };
  } else if (level === 2) {
    myStyle = {
      width: '70vw',
    };
  } else if (level === 3) {
    myStyle = {
      width: '80vw',
    };
  }
  return (
    <>
    <div className='main'>
      {
        level === 1 ?
        <>
          <div onClick={()=> {setDataElements(elements); setLevel(1)}} className="restart">
            Ricomincia
          </div>
          <div className='current-level'>level {level} / 3</div>
          <div className="elements" style={myStyle}>
            {dataElements.map((el)=>{
              return <Element key={el.id} {...el} clickEl={clickElement} stopCLick={stopCLick} level={level} />
            })}
          </div>
          
        </>
        : level === 2 ?
        <>
          <div onClick={()=> {setDataElements(elements); setLevel(1)}} className="restart">
            Ricomincia
          </div>
          <div className='current-level'>level {level} / 3</div>
          <div className="elements" style={myStyle}>
            {dataElements.map((el)=>{
              return <Element key={el.id} {...el} clickEl={clickElement} stopCLick={stopCLick} level={level}/>
            })}
          </div>
          <div className={`level-complete ${level === 2 ? 'animation-level-complete' : ''}` }>
            Level Up!!
          </div>
          
        </> : level === 3 && !win ?  <>
          <div onClick={()=> {setDataElements(elements); setLevel(1)}} className="restart">
            Ricomincia
          </div>
          <div className='current-level'>level {level} / 3</div>
          <div className="elements" style={myStyle}>
            {dataElements.map((el)=>{
              return <Element key={el.id} {...el} clickEl={clickElement} stopCLick={stopCLick} level={level}/>
            })}
          </div>
          <div className={`level-complete ${level === 3 ? 'animation-level-complete' : ''}` }>
            Level Up!!
          </div>
        </> : <div onClick={()=> {setDataElements(elements); setWin(false); setLevel(1);}} className='win-restart'>
           Complimenti, clicca QUI per giocare ancora
        </div> 
      }
    </div>
    <div className="avviso">
     <p>Solo dispositivi con risoluzione 1500px+</p>
   </div>
   </>
  )
}

export default App
