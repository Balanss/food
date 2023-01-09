import React, { useState , useEffect} from 'react'
import { createContext } from 'react';
import useLocalStorage from 'use-local-storage';
import './App.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import Middle from './components/Middle';
import logo from './IMG/logo.jpg'
import Ending from './components/Ending';
import Footer from './components/Footer';
import { Trans , useTranslation } from 'react-i18next';
import fr from "./IMG/fr.png";
import en from "./IMG/en.png";
import Switch from '@mui/material/Switch';




export const ThemeContext = createContext("null");

function App() {


  const { t, i18n} = useTranslation()

const changeLanguage = (language) => {
i18n.changeLanguage(language)
localStorage.setItem("lng", language);
localStorage.setItem("french",true);
}

const changeLanguageEn = (language) => {
  i18n.changeLanguage(language)

localStorage.setItem("french",true);
localStorage.setItem("lng",language);
  
  }


    

const [ theme,setTheme] = useLocalStorage('dark');



const switchTheme = () => {
setTheme((curr) => (curr ==='light'? 'dark':'light'));
}


  return (<>
    <ThemeContext.Provider value = {{theme,switchTheme}}>
<div className="App" id={theme}>

<div className='logo'> 

<div className='bg-div' loading='lazy'>
<img className='top-logo' src={logo} ></img>
<div className='middle-content'>
 
     <div className='top-text-header'> <h2 className='h2-header'> <Trans i18nKey= "header">  </Trans>
     </h2> 
   
      </div>
        </div>
</div>

</div>
    
    
    <Middle />
   <Ending />
   

   
   <div className='switch'>

    
   <Footer />
      <div className='together-switch' > <span className='modeline'>  
    <Switch onChange={switchTheme} checked={theme === 'light'} /> </span>

    <span>   <button className='fr-img' onClick={() => changeLanguage("fr")}  > <img className='fr-logo ' src={fr} /> </button>
    <button className='fr-img' onClick={() => changeLanguageEn("en")}  > <img className='fr-logo ' src={en} /> </button> </span>
  
     </div> 
 
   </div>
 
 
   
  
      </div>  
    
   
    </ThemeContext.Provider>

   </>
  )
}

export default App
