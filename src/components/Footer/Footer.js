import React from 'react'
import './Footer.css'
export function Footer  ({prev,next,tarragon,banana,mango,pink,pale}) {



  return (
    <div className='footer'>
    <button onClick={prev} className='leftbtn'>&lt;</button>
    
    <button onClick={next} className='rightbtn'>&gt;</button>
    <div onClick={banana}  className='banana-apricot, container'>
    <div className='leftbanana'>

</div>
<div className='rightbanana '>

</div>
    </div>
    <div onClick={mango} className='mango-ibiza, container'>
    <div className='leftmango'>

    </div>
    <div className='rightmango'>

    </div>
    </div>
    <div onClick={pale}  className='pale-pink-heavenly, container'>
<div className='leftpale'>

    </div>
    <div className='rightpale'>
      
    </div>
    </div>
    <div onClick={pink}  className='pink-happiness-caribbean, container'>
    <div className='leftpink'>

</div>
<div className='rightpink'>
  
</div>
    </div>
    <div onClick={tarragon}  className='tarragon-poppy, container'>
    <div className='lefttarragon'>

</div>
<div className='righttarragon'>
  
</div>
    </div>
    </div>
  )
}
