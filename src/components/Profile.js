import React,{Component} from 'react';
import image1 from './image1.jpg';
import {HashLink as Link} from 'react-router-hash-link'

class Profile extends Component {
    render(){
        return(
            < div>
                <div className='card'>
                    <div className="card-image">
                        <img src={image1} className='activator' alt='jackson rai'></img>
                        <Link  className='btn-floating halfway-fab waves-effect wave-light red'>
                            <i className="material-icons activator">more_vert</i>
                        </Link>

                    </div>
                    <div className='card-content'>
                        <span className="card-title activator grey-text text-darken-4">
                            Jackson Rai
                        </span>
                        <p>Web Developer</p>
                    </div>
                    
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">@Follow me
      <i class="material-icons right">close</i></span>
      <p className="flex-container">
          <i className='fab fa-facebook-f grey-text text-darken-4 social-style'></i>
          <i className='fab fa-instagram grey-text text-darken-4 social-style'></i>
          <i className='fab fa-youtube grey-text text-darken-4 social-style'></i>
         
      </p>
    </div>

                </div>
            </div>
        )
    }
  
}
export default Profile;