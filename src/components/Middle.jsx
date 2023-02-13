import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Trans , useTranslation } from 'react-i18next'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import "bootstrap/dist/css/bootstrap.css";


export default function Middle() {

//interval={8000}

  return (<>
   
<div className='middle-pics'> 

<div className='middle-text'>  
<div className='middle-info'>
<h2> <Trans i18nKey= "company">  </Trans> </h2>
<p className='center-this' > <Trans i18nKey= "number">  </Trans> <PhoneAndroidIcon />  </p>
<p className='center-this'>  <Trans i18nKey= "email-address"></Trans> <EmailIcon />  </p>
<p className='center-this'> Saint-Laurent du Maroni, Guyane Française   </p>
<p className='center-this'> Paris, France  </p>


</div>

 </div>
</div>

  </>)
}
