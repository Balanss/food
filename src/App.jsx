import React, { useState , useEffect} from 'react'
import { createContext } from 'react';
import useLocalStorage from 'use-local-storage';
import './App.css'
import Middle from './components/Middle';
import logo from './IMG/logo.jpg'
import Ending from './components/Ending';
import Footer from './components/Footer';
import { Trans , useTranslation } from 'react-i18next';
import fr from "./IMG/fr.png";
import en from "./IMG/en.png";
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';




export const ThemeContext = createContext("null");

function App() {

  const [ flag,setFlag] = useLocalStorage(true)
  const [ flagB,setFlagB] = useLocalStorage("src/IMG/fr.png")
  const { t, i18n} = useTranslation()

const changeLanguage = (language) => {
i18n.changeLanguage(language)
localStorage.setItem("lng", language);
localStorage.setItem("french",true);

setFlagB('src/IMG/fr.png')
setFlag(true)
};

const changeLanguageEn = (language) => {
  i18n.changeLanguage(language)
localStorage.setItem("french",true);
localStorage.setItem("lng",language);
setFlag(true)
setFlagB('src/IMG/en.png')

  
  }

const [ theme,setTheme] = useLocalStorage('dark');




const switchTheme = () => {
setTheme((curr) => (curr ==='light'? 'dark':'light'));
}


const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);

};
const handleClose = () => {
  setAnchorEl(null);
};



  return (<>
    <ThemeContext.Provider value = {{theme,switchTheme}}>
      <div className='no-display'> <h2 >Sorry display size is not supported </h2></div>
<div className="App" id={theme}>
<div className='logo'> 

<div className='bg-div' loading='lazy'>
<img className='top-logo' src={logo} ></img>
<div className='middle-content'>
 
     <div className='top-text-header'> <h2 className='h2-header'> <Trans i18nKey= "header"/>
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
    <div className='span-lng'>
      <Button 
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <img className='fr-logo '  src={ (flag === true) ? en : fr}/>
       
        
       
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>    <img className='fr-logo ' src={en}  onClick={() => {changeLanguage("en"); setFlag(true)} }/>  </MenuItem>
        <MenuItem onClick={handleClose}>    <img className='fr-logo ' src={fr}  onClick={() => {changeLanguage("fr"); setFlag(false)}} />  </MenuItem>

      </Menu>
    </div>

    {/* <span className='span-lng'>   <button className='fr-img' onClick={() => changeLanguage("fr")}  > <img className='fr-logo ' src={fr} /> </button>
    <button className='fr-img' onClick={() => changeLanguageEn("en")}  > <img className='fr-logo ' src={en} /> </button> </span> */}


  
     </div> 
 
   </div>
 
 
   
  
      </div>  
    
   
    </ThemeContext.Provider>

   </>
  )
}

export default App
