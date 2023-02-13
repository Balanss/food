
import React , {useState, lazy , Suspense} from 'react'
import din3placeholder from './dinner/din3placeholder.jpg'
import din1 from "./dinner/din1.webp"
import din1ph from "./dinner/din1ph.jpg"
import din2 from "./dinner/din2.jpg"
import din2ph from "./dinner/din2ph.jpg"
import din3 from "./dinner/din3.webp"
import din4 from "./dinner/din4.jpg"
import din4ph from "./dinner/din4ph.jpg"
import macaroni from "./dinner/macaroni.webp"
import macaroniph from "./dinner/macaroniph.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Trans , useTranslation } from 'react-i18next'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Catering from "./Catering"
import Cakes from "./Cakes"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function ending() {
  const [dinner,setDinner] = useState(true)
  const [ lunch,setLunch] = useState(false)
  const [cake,setCake] = useState(false)
  const [ catering,setCatering ] = useState(false)
  const [ color,setColor] = useState('red')
const [colorLunch,setColorLunch] = useState("white")
const [ colorCake,setColorCake] = useState("white")
const [ colorCatering,setColorCatering] = useState("white")

  
const Lunch = lazy(() => import ('./lunch'));
//const Cakes = lazy(() => import ('./Cakes'));
// const Catering = lazy(() => import ('./Catering'));

const handleDinner = () => {
setDinner(true);setLunch(false);setCake(false);setColor("red");setColorCake("white");setColorLunch("white");setColorCatering("white")
}


const handleLunch = () => {
  setLunch(true);setDinner(false);setCake(false);setColor("white");setColorLunch("red");setColorCake("white");setCatering(false);setColorCatering('white')
}

const handleCake = () => {
  setLunch(false); setDinner(false) ;setCake(true); setCatering(false); setColor("white");setColorLunch("white");setColorCake("red");setColorCatering('white')
}

const handleCatering = () => {
  setLunch(false);setDinner(false);setCake(false);setCatering(true);setColor("white");setColorLunch("white");setColorCake("white");setColorCatering("red")
}
  
const [open, setOpen] = React.useState(false);
const [ id , setId] = useState('');
  const handleClose = () => setOpen(false);

 

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
<button onClick={handleCatering} className="foodmenu" style={{color: colorCatering}}> <Trans i18nKey= "catering">  </Trans></button>
  </span>

<div className='menu'> 



<div className='' style={{display:dinner? "block":"none"}}>  
<Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item  xs={6} sm={6}>
        <Button onClick={() => {setOpen(true); setId(din1)} }>  <div className='menubglist'> <h6><LazyLoadImage  className='menulist ' src={din1} alt={din1} placeholderSrc={din1ph} effect='blur'/> yellow rice <br/> with chicken </h6></div> </Button>
        <Button onClick={() => { setOpen(true); setId(din2) }}> <div className='menubglist'><h6> <LazyLoadImage className='menulist' src={din2} alt={din2} placeholderSrc={din2ph} effect='blur' /> fried rice <br/> with chicken  </h6> </div> </Button>
        <Button onClick={() => { setOpen(true); setId(din4) }}> <div className='menubglist'><h6> <LazyLoadImage  className='menulist' src={din4} alt={din4} placeholderSrc={din4ph} effect='blur' /> <br/>  </h6> </div> </Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <img loading='lazy' src={id} alt={id} className='menulist formodal' />   
          </Typography>
        </Box>
      </Modal>
        </Grid>
        <Grid item xs={6} sm={6}>
        <Button onClick={() => { setOpen(true); setId(din3) }}><div className='menubglist'><h6><LazyLoadImage  className='menulist' src={din3} placeholderSrc={din3placeholder} alt={din3} effect='blur'/> brown rice <br/> with bbq chicken  </h6> </div> </Button>
        <Button onClick={() => { setOpen(true); setId(macaroni) }}> <div className='menubglist'><h6><LazyLoadImage  className='menulist' src={macaroni} alt={macaroni}  placeholderSrc={macaroniph} effect='blur'/> macaroni dish <br/> with grilled chicken </h6> </div> </Button>
        </Grid>
      </Grid>
    </Box>  </div>

<div>   <Suspense fallback={<div> Loading ... </div>}>  
    <div style={{display:lunch? "block":"none"}} >   <Lunch />    </div>
   
 
    </Suspense>  
    </div>
    <div className='' style={{display:cake? "block":"none"}}>  <Cakes />  </div> 
    <div className='' style={{display:catering? "block":"none"}}>    <Catering /> </div>

</div>

</div>

</div>





</div>


  
  )
}
