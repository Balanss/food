
import React from 'react'
import { Trans , useTranslation } from 'react-i18next'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';





export default function Footer() {


  return (<> 
   <div className='footer'>
      <div className='footer-info'> 
      <h5> <Trans i18nKey= "number">  </Trans> <PhoneAndroidIcon /> </h5> 
      <h5> <Trans i18nKey= "email-address"> </Trans>  <EmailIcon /> </h5>   
      <h5>  <Trans i18nKey= "kkf"></Trans> </h5>
     
   
      </div>
      <h3 className='company-slogan'>  <Trans i18nKey= "company"></Trans> </h3>
<div> 
</div>

    </div> 
 </> )
}
