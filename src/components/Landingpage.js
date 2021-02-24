import React,{Component} from 'react';
import image from './image.jpg';
import image1 from './image1.jpg'
import{
    createMuiTheme,MuiThemeProvider,responsiveFontSizes,Typography
}from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faGithub,

    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

let theme=createMuiTheme();
theme=responsiveFontSizes(theme)

const heading='Build, Create And Delivery'
const text="Hello, it's me jackson rai, I live in Kathmandu,Nepal. I create a Website for small Business & Company. Innovation is my passion."
const social='@Find Me'
class Landing extends Component {
    render(){
        return(
            
            <div className="landing__container">
                 <img src={image} alt='avatar' className='landing__image'/>
                 <div className='centered__text'>
                 <MuiThemeProvider theme={theme}>
                     <Typography variant='h2' gutterBottom>{heading}</Typography>
                     <div className='subtitle'>
                     <Typography className='subtitle' variant='h6' gutterBottom>{text}</Typography>
                     <img src={image1} alt='admin' className='admin__image'></img> 
                     </div>
                    
                     
                     <div className='social__follow'>
                         <Typography variant='h5' gutterBottom>{social}</Typography>
                         <a href="https://www.youtube.com/channel/UCIYzSt21EHw4-aQizaD5r0g"
                              className="youtube__social">
                               <FontAwesomeIcon icon={faYoutube} size="2x" />
                             </a>
                             <a href="https://github.com/Jacsonrai"
                               className="github__social">
                              <FontAwesomeIcon icon={faGithub} size="2x" />
                               </a> 
                        <a href="https://www.instagram.com/jacson.rai/"
                            className="instagram__social">
                              <FontAwesomeIcon icon={faInstagram} size="2x" />
                              </a>

                         <a href="https://www.facebook.com/profile.php?id=100005879822336"
                               className="facebook__social">
                              <FontAwesomeIcon icon={faFacebook} size="2x" />
                               </a>
                               

                     </div>
                 </MuiThemeProvider>
                
                 </div>
            

                 
                  
            </div>
        )
    }
  
}
export default Landing;