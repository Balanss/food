
import React from 'react'
import { Trans , useTranslation } from 'react-i18next'






export default function Footer() {


  return (<> 
   <div className='footer'>
      <div className='footer-info'> 
      <h5> <Trans i18nKey= "email"> email placeholder </Trans> </h5>  
      <h5>  <Trans i18nKey= "place"> name placeholder </Trans> </h5> 
      <h5> <Trans i18nKey= "tel"> tel placeholder </Trans> </h5> 
      </div>
<div> 
</div>

    </div> 
 </> )
}
