
import React , {useState} from 'react'
import din3placeholder from './dinner/din3placeholder.jpg'
import din1 from "./dinner/din1.jpg"
import din1ph from "./dinner/din1ph.jpg"
import din2 from "./dinner/din2.jpg"
import din2ph from "./dinner/din2ph.jpg"
import din3 from "./dinner/din3.jpg"
import din4 from "./dinner/din4.jpg"
import din4ph from "./dinner/din4ph.jpg"
import macaroni from "./dinner/macaroni.jpg"
import macaroniph from "./dinner/macaroniph.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Trans , useTranslation } from 'react-i18next'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Lunch from './Lunch'
import Cakes from './Cakes'
import 'react-lazy-load-image-component/src/effects/blur.css';




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
  <button onClick={handleCake} className="foodmenu" style={{color: colorCake}} > <Trans i18nKey= "cake">  </Trans> </button>
<button onClick={handleLunch} className="foodmenu" style={{color: colorLunch}} > <Trans i18nKey= "lunch">  </Trans></button>
<button onClick={handleDinner} className="foodmenu" style={{color: color}}> <Trans i18nKey= "dinner">  </Trans></button>
  </span>

<div className='menu'> 



<div className='' style={{display:dinner? "block":"none"}}>  
<Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item  xs={12} sm={6}>
        <div className='menubglist'> <h6><LazyLoadImage  className='menulist ' src={din1} alt={din1} placeholderSrc={din1ph} effect='blur'/> yellow rice <br/> with chicken </h6></div>
        <div className='menubglist'><h6> <LazyLoadImage className='menulist' src={din2} alt={din2} placeholderSrc={din2ph} effect='blur' /> fried rice <br/> with chicken  </h6> </div>
        <div className='menubglist'><h6> <LazyLoadImage  className='menulist' src={din4} alt={din4} placeholderSrc={din4ph} effect='blur' /> <br/>  </h6> </div>
        </Grid>
        <Grid item xs={12} sm={6}>
        <div className='menubglist'><h6><LazyLoadImage  className='menulist' src={din3} placeholderSrc={din3placeholder} alt={din3} effect='blur'/> brown rice <br/> with bbq chicken  </h6> </div>
        <div className='menubglist'><h6><LazyLoadImage  className='menulist' src={macaroni} alt={macaroni}  placeholderSrc={macaroniph} effect='blur'/> macaroni dish <br/> with grilled chicken </h6> </div>
        </Grid>
      </Grid>
    </Box>  </div>

<div style={{display:lunch? "block":"none"}} >   <Lunch /> </div>
 


    <div className='' style={{display:cake? "block":"none"}}>  <Cakes /> </div>

</div>

</div>

</div>





</div>


  
  )
}
