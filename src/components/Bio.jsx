import React from 'react'
import { Trans , useTranslation } from 'react-i18next'

export default function Bio() {
  return (
    <div className='main-bio-div'>
 
 <div>
<h2> About US </h2>
 </div>

 <div className='hobby'>
 <p className='p-hobby'>  <Trans i18nKey="cook"> </Trans> </p>
 </div>
<hr className='hr-bio' />
 <div className='closing-text'>
<h4> <Trans i18nKey= "company">  </Trans> <br/> <Trans i18nKey= "loc">  </Trans>  </h4>
<h5>  <Trans i18nKey= "fci">  </Trans> <br/> <Trans i18nKey= "click">  </Trans> 
<a href='#info' style={{fontSize:'20px'}}> <Trans i18nKey= "here">  </Trans>... </a>   </h5>

 </div>


    </div>
  )
}
