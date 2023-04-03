import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Trans , useTranslation } from 'react-i18next'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import "bootstrap/dist/css/bootstrap.css";


export default function Middle() {



  return (<>
   
<div className='middle-pics'> 

<div className='middle-text' >  
<h2 className='company-text'> <Trans i18nKey= "company">  </Trans> </h2>
<div className='middle-info'>
<div className='display-this-flex'>
  <h2 style={{fontSize:'30px'}}> Contact</h2>
<p className='center-this' style={{marginTop:"20px"}} > <PhoneAndroidIcon className='svg-icon' />  <Trans i18nKey= "number">  </Trans>   </p>
<p className='center-this'> <EmailIcon className='svg-icon' />  <Trans i18nKey= "email-address"></Trans>   </p>
</div>
<hr/>
<div className='display-this-flex'>
  <h2 style={{fontSize:'30px'}}> <Trans i18nKey="location"></Trans> </h2>
<p className='center-this' style={{marginTop:"20px"}}> Saint-Laurent du Maroni, <Trans i18nKey="guyana"> </Trans>   </p>
<p className='center-this'> Paris, France  </p>
</div>
<hr/>
<div className='display-this-flex-time'>
  <h2 style={{fontSize:'30px'}}> <Trans i18nKey="opening"></Trans> </h2>
  <p className='center-this-time' style={{marginTop:"20px"}}>  <Trans i18nKey="tue"> </Trans>  18.30pm - 23.00pm  </p>
  <p className='center-this-time' >  <Trans i18nKey="wed"> </Trans>  18.30pm - 23.00pm  </p>
  <p className='center-this-time'>  <Trans i18nKey="thur"> </Trans>  18.30pm - 23.00pm  </p>
  <p className='center-this-time'>  <Trans i18nKey="fri"> </Trans>  18.30pm - 23.00pm  </p>
  <p className='center-this-time'>  <Trans i18nKey="sat"> </Trans>  12.30pm - 18.30pm  </p>
  <p className='center-this-time'>  <Trans i18nKey="sun"> </Trans>  12.30pm - 23.00pm  </p>

</div>




</div>

 </div>
</div>

  </>)
}
