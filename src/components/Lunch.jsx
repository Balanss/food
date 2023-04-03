import React, {useState} from 'react'
import lunch1 from "./lunch/lunch1.jpg"
import lunch1ph from "./lunch/lunch1ph.jpg"
import lunch2 from "./lunch/lunch2.jpg"
import lunch2ph from "./lunch/lunch2ph.jpg"
import lunch3 from "./lunch/lunch3.jpg"
import lunch3ph from "./lunch/lunch3ph.jpg"
import salad1 from "./lunch/salad1.jpg"
import salad1ph from "./lunch/salad1ph.jpg"
import salad2 from "./lunch/salad2.jpg"
import salad2ph from "./lunch/salad2ph.jpg"
import salad3 from "./lunch/salad3.jpg"
import salad3ph from "./lunch/salad3ph.jpg"
import salad5 from "./lunch/salad5.webp"
import saladph from "./lunch/saladph.jpg"
import coco from "./lunch/coco.jpg"
import roti from "./lunch/roti.webp"
import sate from "./lunch/sate.webp"
import mixsalad from "./lunch/mixsalad.webp"
import { Trans , useTranslation } from 'react-i18next'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Carousel from 'react-bootstrap/Carousel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



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


export default function Lunch() {

  const [ id , setId] = useState('');
const [open, setOpen] = React.useState(false);
const handleClose = () => setOpen(false);
  return ( <>
    <div className=''>  
  <Carousel> 
  <Carousel.Item interval={15000}>

    <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <Button className='index' onClick={() => {setOpen(true); setId(lunch1) } }>   <div className='menubglist'> <h6 >  <LazyLoadImage className='menulist' src={lunch1} alt={lunch1} placeholderSrc={lunch1ph} />  <Trans i18nKey="rolls"></Trans> </h6> </div> </Button>
            <Button  className='index'  onClick={() => {setOpen(true); setId(roti)} }> <div className='menubglist'>  <h6 >  <LazyLoadImage className='menulist' src={roti} alt={roti}   /> Roti <br/> <Trans i18nKey="roti"></Trans> </h6> </div> </Button>
            <Button  className='index'  onClick={() => {setOpen(true); setId(lunch2)} }> <div className='menubglist'>  <h6 >  <LazyLoadImage className='menulist' src={lunch2} alt={lunch2} placeholderSrc={lunch2ph}  /> <Trans i18nKey="pastei"></Trans> </h6> </div> </Button>
            </Grid>
            <Grid item xs={6}>
            <Button  className='index'  onClick={() => {setOpen(true); setId(sate)} }> <div className='menubglist'>  <h6 >  <LazyLoadImage className='menulist' src={sate} alt={sate}   /> <Trans i18nKey="sate"></Trans> </h6> </div> </Button>
            <Button  className='index' onClick={() => {setOpen(true); setId(coco)} }> <div  className='menubglist'> <h6>  <LazyLoadImage className='menulist' src={coco}  alt={coco}   /> <Trans i18nKey="coco"></Trans></h6> </div> </Button>
            <Button className='index'  onClick={() => {setOpen(true); setId(lunch3)} }>   <div className='menubglist'>  <h6 > <LazyLoadImage  className='menulist' src={lunch3} alt={lunch3} placeholderSrc={lunch3ph}  /> <Trans i18nKey="pom"></Trans>  </h6> </div> </Button>     
            </Grid>
          </Grid>   
        </Box>       
</Carousel.Item>
<Carousel.Item interval={15000}>
       
       

        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
           
           
   
            <Button className='index'  onClick={() => {setOpen(true); setId(salad5)} }>  <div className='menubglist'> <h6 >  <LazyLoadImage className='menulist' src={salad5} alt={salad5}  placeholderSrc={saladph}  /> <Trans i18nKey="pine"></Trans></h6> </div> </Button>
            <Button className='index'  onClick={() => {setOpen(true); setId(salad1)} }>  <div className='menubglist'> <h6 >  <LazyLoadImage className='menulist' src={salad1} alt={salad1}  placeholderSrc={salad1ph}  /> <Trans i18nKey="corn"></Trans> </h6> </div> </Button>
            <Button className='index'  onClick={() => {setOpen(true); setId(mixsalad)} }>  <div className='menubglist'> <h6 >  <LazyLoadImage className='menulist' src={mixsalad} alt={mixsalad}   /> <Trans i18nKey="mixsalad"></Trans> </h6> </div> </Button>

       
            </Grid>
            <Grid item xs={6}>
             <Button  className='index' onClick={() => {setOpen(true); setId(salad3)} }>  <div  className='menubglist'> <h6>  <LazyLoadImage className='menulist' src={salad3}  alt={salad3} placeholderSrc={salad3ph}  /> <Trans i18nKey="olives"></Trans> </h6> </div> </Button> 
             <Button  className='index' onClick={() => {setOpen(true); setId(salad2)} }><div className='menubglist'> <h6 >  <LazyLoadImage className='menulist' src={salad2} alt={salad2} placeholderSrc={salad2ph}  /> <Trans i18nKey="eggsalad"></Trans> </h6> </div> </Button>

            </Grid>
    
          </Grid>
        </Box>  
        </Carousel.Item>
   
        </Carousel>
       
        </div>

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

 </> )
}
