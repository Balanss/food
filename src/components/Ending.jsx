
import React , {useState} from 'react'
import cake1 from "./Cake/cake1.jpg"
import cake2 from "./Cake/cake2.jpg"
import cake3 from "./Cake/cake3.jpg"
import lunch1 from "./lunch/lunch1.jpg"
import lunch2 from "./lunch/lunch2.jpg"
import lunch3 from "./lunch/lunch3.jpg"
import din1 from "./dinner/din1.jpg"
import din2 from "./dinner/din2.jpg"
import din3 from "./dinner/din3.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Trans , useTranslation } from 'react-i18next'




export default function ending() {
  const [dinner,setDinner] = useState(true)
  const [ lunch,setLunch] = useState(false)
  const [cake,setCake] = useState(false)
  const [ color,setColor] = useState('red')
const [colorLunch,setColorLunch] = useState("white")
const [ colorCake,setColorCake] = useState("white")

  


const handleDinner = () => {
setDinner(true)
setLunch(false)
setCake(false)
setColor("red")
setColorCake("white")
setColorLunch("white")
}


const handleLunch = () => {
  setLunch(true)
  setDinner(false)
  setCake(false)
  setColor("white")
  setColorLunch("red")
  setColorCake("white")
}



const handleCake = () => {
  setLunch(false)
  setDinner(false)
  setCake(true)
  setColor("white")
  setColorLunch("white")
  setColorCake("red")
}
  
  return (
<div className='small-menu'> 
<div className='motto'> <h2> <Trans i18nKey= "motto"> Food by blessed hands </Trans> </h2> 

 </div>

<div className='spicesbg'>
<div className='mini-menu'>
  <span>
  <button onClick={handleCake} className="foodmenu" style={{color: colorCake}} > <Trans i18nKey= "cake"> Cakes </Trans> </button>
<button onClick={handleLunch} className="foodmenu" style={{color: colorLunch}} > <Trans i18nKey= "lunch"> lunch </Trans></button>
<button onClick={handleDinner} className="foodmenu" style={{color: color}}> <Trans i18nKey= "dinner"> Dinner </Trans></button>
  </span>

<div className='menu'> 
<div  > 

 <img className='menulist' src={din1} style={{display:dinner? "block":"none"}}/>
 <img className='menulist' src={din2} style={{display:dinner? "block":"none"}}/>
 <img className='menulist' src={din3} style={{display:dinner? "block":"none"}}/>
</div>

<div  > 
  

 <img className='menulist' src={lunch1} style={{display:lunch? "block":"none"}}/>
 <img className='menulist' src={lunch2} style={{display:lunch? "block":"none"}}/>
 <img className='menulist' src={lunch3} style={{display:lunch? "block":"none"}}/>
</div>


<div> 

 <img loading='lazy' src={cake1} className='menulist' style={{display:cake? "block":"none"}} /> 
 <img loading='lazy' src={cake2} className='menulist' style={{display:cake? "block":"none"}} />
 <img loading='lazy' src={cake3} className='menulist' style={{display:cake? "block":"none"}} />
</div>

</div>

</div>

</div>





</div>


  
  )
}
