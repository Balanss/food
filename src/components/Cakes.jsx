import React from 'react'
import cake1 from "./Cake/cake1.jpg"
import cake2 from "./Cake/cake2.jpg"
import cake3 from "./Cake/cake3.jpg"
import { Trans , useTranslation } from 'react-i18next'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Lunch from './Lunch'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Cakes() {
  return (
    <div> 
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
      <div className='menubglist'> <h6 > <LazyLoadImage loading='lazy' src={cake1} alt={cake1} className='menulist'  /> brown cake  </h6> </div>
       <div className='menubglist'><h6 > <LazyLoadImage loading='lazy' src={cake2} alt={cake2} className='menulist'  />  </h6> </div>
       <div className='menubglist'><h6 > <LazyLoadImage loading='lazy' src={cake3} alt={cake3} className='menulist'  /> marmer cake </h6> </div>
        </Grid>
        <Grid item xs={6}>

        </Grid>

      </Grid>
    </Box>  
    </div>

  )
}