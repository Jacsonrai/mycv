import React,{Component} from 'react';
import ReactImage from './ReactImage.jpg'

class ReactCard extends Component {
    render(){
        return(
            <div>
           
      <div className="card">
        <div className="card-image">
          <img src={ReactImage} className='activator' alt=''></img>
          <span className="card-title">Amazon clone</span>
        </div>
        <div className="card-content">
          <p>i have made a clone of amazone 
       </p>
        </div>
        <div className="card-action">
          <a href="https://github.com/Jacsonrai/amazonClone">github</a>
      
      </div>
   
  </div>
           
            <div className="card">
        <div className="card-image">
          <img src={ReactImage} className='activator'alt=''></img>
          <span className="card-title">Discord Bot</span>
        </div>
        <div className="card-content">
          <p>This BOT is a simple Discord bot. This bot helps to welcome User automatically as New user enter in your Discord server
       </p>
        </div>
        <div className="card-action">
          <a href="https://github.com/Jacsonrai/nepgaming-bot">github</a>
        </div>
  
   
 
            </div>
     
            </div>
        )
    }
  
}
export default ReactCard;