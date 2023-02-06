import React from 'react'
import lunch1 from "./lunch/lunch1.jpg"
import lunch2 from "./lunch/lunch2.jpg"
import lunch3 from "./lunch/lunch3.jpg"
import salad1 from "./lunch/salad1.jpg"
import salad2 from "./lunch/salad2.jpg"
import salad3 from "./lunch/salad3.jpg"
import { Trans , useTranslation } from 'react-i18next'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Lunch() {
  return (
    <div className=''>  
    <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <div className='menubglist'> <h6 >  <LazyLoadImage className='menulist' src={lunch1} alt={lunch1} loading="lazy"/> surinamese spring roll <br /></h6> </div>
            <div className='menubglist'>  <h6 >  <LazyLoadImage className='menulist' src={lunch2} alt={lunch2} /> surinamese pastei <br />  </h6> </div>
            <div className='menubglist'>  <h6 > <LazyLoadImage  className='menulist' src={lunch3} alt={lunch3} /> surinamese pastei <br />  </h6> </div>
          
            </Grid>
            <Grid item xs={6}>
            <div className='menubglist'> <h6 >  <LazyLoadImage className='menulist' src={salad1} alt={salad1} loading="lazy" /> salad with corn, beans, lettuce  </h6> </div>
             <div className='menubglist'> <h6 >  <LazyLoadImage className='menulist' src={salad2} alt={salad2} loading="lazy" /> egg salad with fries, lettuce  </h6> </div>
             <div  className='menubglist'> <h6>  <LazyLoadImage className='menulist' src={salad3}  alt={salad3} loading="lazy" /> salad with tomatoes, olives, cucumber ,lettuce </h6> </div>
            </Grid>
    
          </Grid>
        </Box>  </div>
  )
}
