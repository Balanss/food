
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
import din4 from "./dinner/din4.jpg"
import macaroni from "./dinner/macaroni.jpg"
import salad1 from "./lunch/salad1.jpg"
import salad2 from "./lunch/salad2.jpg"
import salad3 from "./lunch/salad3.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Trans , useTranslation } from 'react-i18next'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';




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



<div className='' style={{display:dinner? "block":"none"}}>  
<Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item  xs={12} sm={6}>
        <div className='menubglist'> <h6> <img className='menulist ' src={din1} /> yellow rice <br/> with chicken </h6></div>
        <div className='menubglist'><h6>  <img className='menulist' src={din2} /> fried rice <br/> with chicken  </h6> </div>
        <div className='menubglist'><h6>  <img className='menulist' src={din4} /> <br/>  </h6> </div>
        </Grid>
        <Grid item xs={12} sm={6}>
        <div className='menubglist'><h6> <img className='menulist' src={din3} /> brown rice <br/> with bbq chicken  </h6> </div>
        <div className='menubglist'><h6> <img className='menulist' src={macaroni}/> macaroni dish <br/> with grilled chicken </h6> </div>
        </Grid>
      </Grid>
    </Box>  </div>

    <div className='' style={{display:lunch? "block":"none"}}>  
<Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <div className='menubglist'> <h6 > <img className='menulist' src={lunch1} /> surinamese spring roll <br /></h6> </div>
        <div className='menubglist'>  <h6 > <img className='menulist' src={lunch2} /> surinamese pastei <br />  </h6> </div>
        <div className='menubglist'>  <h6 > <img className='menulist' src={lunch3} /> surinamese pastei <br />  </h6> </div>
      
        </Grid>
        <Grid item xs={6}>
        <div className='menubglist'> <h6 > <img className='menulist' src={salad1} /> salad with corn, beans, lettuce  </h6> </div>
         <div className='menubglist'> <h6 > <img className='menulist' src={salad2} /> egg salad with fries, lettuce  </h6> </div>
         <div  className='menubglist'> <h6> <img className='menulist' src={salad3} /> salad with tomatoes, olives, cucumber ,lettuce </h6> </div>
        </Grid>

      </Grid>
    </Box>  </div>


    <div className='' style={{display:cake? "block":"none"}}>  
<Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
      <div className='menubglist'> <h6 > <img loading='lazy' src={cake1} className='menulist'  /> brown cake  </h6> </div>
       <div className='menubglist'><h6 > <img loading='lazy' src={cake2} className='menulist'  />  </h6> </div>
       <div className='menubglist'><h6 > <img loading='lazy' src={cake3} className='menulist'  /> marmer cake </h6> </div>
        </Grid>
        <Grid item xs={6}>

        </Grid>

      </Grid>
    </Box>  </div>

</div>

</div>

</div>





</div>


  
  )
}
