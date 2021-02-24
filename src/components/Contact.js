import axios from 'axios';
import React,{useState} from 'react';

import Personalinfo from './Personalinfo';

function Contact() {
  const[input,setInput]=useState({
    email:'',
      phone:'',
      subject:''
  })

  function handelChange(event) {
    const{name,value}=event.target;

    setInput(prevInput=>{
      return{
        ...prevInput,
        [name]:value
      }
    })
    
  }
  function handleClick() {
    const newNote={
      email: input.email,
      phone:input.phone,
      subject:input.subject
    }
    axios.post('http://localhost:3001/create',newNote)
   
    
  }
  return(
      <div>
             <div className="row">

          <div className="col s12 m8 l9">
                <div className="card">
                <div className="card-content">
                    <h5 className="mt-bottom">
                        <b>About Me</b>
                      </h5>
                        <p className=" gray-text text-darken-2">
                        Hello its me jackson rai, i am from kathmandu Nepal. I am website developer can develope website focusing on small bussiness frims and comapany.
                      </p>
                      <div className='card'>
                       <div className='card-content'>
                       <div className="row">
               <form className='col s12'>
               <h5 className="mt-bottom">
                        <b>Contact Me</b>
                      </h5>
                   <div className='row'>
                 
                      <div className="input-field col s6 ">
                      <i className="material-icons prefix">account_circle</i>
                      <input onChange={handelChange} value={input.email} name='email' id="icon_prefix" type="text" className="validate"></input>
                      <label htmlFor="icon_prefix">Email </label>

                      </div>
                      <div className="input-field col s6">
                      <i className="material-icons prefix">phone</i>
    <input onChange={handelChange} value={input.number} name='phone' id="icon_telephone" type="tel" className="validate"></input>
    <label htmlFor="icon_telephone">Telephone</label>
                </div> 
                <div className="input-field col s6">
    <i className="material-icons prefix">mode_edit</i>
    <textarea onChange={handelChange} name='subject' value={input.subject} id="icon_prefix2" className="materialize-textarea"></textarea>
    <label htmlFor="icon_prefix2">Subject</label>
    
  </div>   

               
 
     </div>
     <button onClick={handleClick} className="btn waves-effect waves-light" type="submit" name="action">submit
           <i className="material-icons right">send</i>
           </button>
   
               </form>
             

           </div>
         
                       </div>
                    
                     </div>

                    </div>
                    </div>
                      </div>

<div className="col s12 m3 l3">
<Personalinfo/>
</div>

</div>
    
      </div>
  )
}


  

    
export default Contact;