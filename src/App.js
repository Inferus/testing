import {useState} from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
function App() {

const [hoodieType, setHoodieType] = useState('mango-ibiza')
const [hoodieColor, setHoodieColor] = useState('black')
const [topColor, settopColor] = useState('i-o')
const [colored, setcolored] = useState('all')
const topColors = ['i-o', 'none', 'l-r']
const hoodieColors = ['black', 'grey', 'white']
const whatColored = ['all','hood-only']



function nextHoodiecolor(){
if (hoodieColors[hoodieColors.findIndex((e)=> e === hoodieColor)+1] === undefined){
 return setHoodieColor(hoodieColors[0])
}

setHoodieColor(hoodieColors[hoodieColors.findIndex((e)=> e === hoodieColor)+1])
}


function prevHoodieColor(){
  if (hoodieColors[hoodieColors.findIndex((e)=> e === hoodieColor)-1] === undefined){
    
   return setHoodieColor(hoodieColors[hoodieColors.length - 1 ])
  }
  setHoodieColor(hoodieColors[hoodieColors.findIndex((e)=> e === hoodieColor)-1])
  }



function setMango(){
  
   setHoodieType('mango-ibiza')
}



function setBanana(){

   setHoodieType('banana-apricot')
}
function setPale(){

  setHoodieType('pale-pink-heavenly')
}
function setPink(){

  setHoodieType('pink-happiness-caribbean')
}
function setTarragon(){

  setHoodieType('tarragon-poppy')
}

function nextColored(){
  if ((whatColored[whatColored.findIndex((e)=> e === colored)+1] === 'hood-only'|| whatColored[whatColored.findIndex((e)=> e === colored)+1] === 'all')  && topColor === 'none'){
settopColor('i-o')
  }
  if (whatColored[whatColored.findIndex((e)=> e === colored)+1] === 'pocket-only'){
    settopColor('none')
  }
  if (whatColored[whatColored.findIndex((e)=> e === colored)+1] === undefined){
   
    return setcolored(whatColored[0])
   }
   setcolored(whatColored[whatColored.findIndex((e)=> e === colored)+1])
}



function prevColored(){
  if (whatColored[whatColored.findIndex((e)=> e === colored)-1] === undefined  && topColor === 'none'){
    settopColor('i-o')
      }

  if (whatColored[whatColored.findIndex((e)=> e === colored)-1] === undefined){
   
    return setcolored(whatColored[whatColored.length - 1])
   }
   setcolored(whatColored[whatColored.findIndex((e)=> e === colored)-1])
}



function nextHoodcolor(){
  if (topColors[topColors.findIndex((e)=> e === topColor)+1] === 'none'){
    setcolored('pocket-only')
    settopColor('none')
    return 
  }
  if (topColors[topColors.findIndex((e)=> e === topColor)+1] !== 'none' && colored === 'pocket-only'){
    setcolored('all')
  }
  if (topColors[topColors.findIndex((e)=> e === topColor)+1] === undefined){
    
    return settopColor(topColors[0])
   }
   settopColor(topColors[topColors.findIndex((e)=> e === topColor)+1])
}



function prevHoodcolor(){
  
  if (topColors[topColors.findIndex((e)=> e === topColor)-1] !== 'none' && colored === 'pocket-only'){
    setcolored('all')
  }
  if (topColors[topColors.findIndex((e)=> e === topColor)-1] === 'none'){
    setcolored('pocket-only')
    settopColor('none')
    return
  }
  if (topColors[topColors.findIndex((e)=> e === topColor)-1] === undefined){
    
    return settopColor(topColors[topColors.length - 1])
    
   }
   settopColor(topColors[topColors.findIndex((e)=> e === topColor)-1])
}






  return (
  <div className='main'>
    <Header></Header>
  <img alt='hoodie' height={300} width={190} src={require(`./image/${hoodieType}/b__${hoodieColor}_${topColor}_${hoodieType}_${colored}.png`)}></img>



<button className='pocketright' onClick={nextColored}>&gt;</button>
<button className='pocketleft' onClick={prevColored}>&lt;</button>
<button className='hoodright' onClick={nextHoodcolor}>&gt;</button>
<button className='hoodleft' onClick={prevHoodcolor}>&lt;</button>
<h1 className='hoodieType'>{hoodieType}</h1>
<Footer banana={setBanana} pale={setPale}
pink={setPink} mango={setMango} tarragon={setTarragon} prev ={prevHoodieColor} next={nextHoodiecolor}></Footer>
  </div>
  );
}

export default App;
