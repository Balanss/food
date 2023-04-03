import React from 'react'
import { Trans , useTranslation } from 'react-i18next'

export default function Bio() {
  return (
    <div className='main-bio-div'>
 
 <div>
<h2  className='about-text' style={{fontSize:'30px'}}> <Trans i18nKey= "about">  </Trans>  </h2>
 </div>

 <div className='hobby'>
 <p className='p-hobby'>  <Trans i18nKey="cook"> </Trans> </p>
 </div>
<hr className='hr-bio' />
 <div className='closing-text' style={{textShadow: "1px 1px darkgoldenrod"}}>
<h4> <Trans i18nKey= "company">  </Trans> <br/> <Trans i18nKey= "loc">  </Trans>  </h4>
<h5 className='text-increase'>  <Trans i18nKey= "fci">  </Trans> <br/> <Trans i18nKey= "click">  </Trans> 
<a className='a-link' href='#info' style={{fontSize:'20px'}}> <Trans i18nKey= "here">  </Trans>... </a>   </h5>

 </div>


    </div>
  )
}
