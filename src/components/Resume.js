
import React,{Component} from 'react';
import About from './About';
import Profile from "./Profile";
import Education from './Education'
import Skill from "./Skill";

class Resume extends Component {
    render(){
        return(
            <div className='Container'>
                <div className='row'>
                <div class="col s12 m3 l3">
                <Profile/>
                
                </div>
                <div class="col s12 m8 l9">
                   <About/>
                    <Skill/>
                    <Education/>
                    
                </div>

                </div>
           
            </div>
        )
    }
  
}
export default Resume;