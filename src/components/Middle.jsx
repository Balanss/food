import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import dinner from "../IMG/dinner.webp"
import dinner2 from "../IMG/dinner2.webp"
import pom from "../IMG/pom.webp"
import { Trans , useTranslation } from 'react-i18next'
import "bootstrap/dist/css/bootstrap.css";


export default function Middle() {

//interval={8000}

  return (<>
   
<div className='middle-pics'> 

<div className='middle-text'>  
<div className='middle-info'>
<h2> <Trans i18nKey= "place"> name placeholder </Trans> </h2>
<p> <Trans i18nKey= "tel"> tel placeholder </Trans>  </p>
<p> <Trans i18nKey= "email"> email placeholder </Trans>  </p>


</div>

 </div>


<div className='picsoffood'>
<Carousel>
<Carousel.Item interval={40000}>
<img
          className="car-img"
          src={dinner}
          alt="First slide"
         
        /> 
        <p className='foot-item-name'> Rice with bbq chicken </p>
        </Carousel.Item>


        <Carousel.Item interval={40000}>
<img
          className="car-img"
          src={pom}
          alt="pom"
         
        /> 
         <p className='foot-item-name'> Sweet sweet pom </p>
        </Carousel.Item>

        <Carousel.Item interval={40000}>
<img
          className="car-img"
          src={dinner2}
          alt="dinner2"
          
        /> 
         <p className='foot-item-name'> Soato soup  </p>
        </Carousel.Item>

</Carousel>

</div>
</div>

  </>)
}
