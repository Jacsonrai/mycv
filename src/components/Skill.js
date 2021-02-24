import React,{Component} from 'react';

class Skill extends Component {
    render(){
        return(
            <div>
             <div className='card'>
                 <div className='card-content'>
                     <h5>
                         <b>My Skills</b>
                     </h5>
                     <div className="row mt-top">
                         
                         <div className="col s6">
                             <p>HTML</p>
                             <div className="progress grey lighten-1">
                                <div className="determinate blue" style={{width:'80%'}}>
                               </div>
                               </div>
                               </div>
                            

                            <div className="col s6">
                            <p>css</p>
                            <div className="progress grey lighten-1">
                                <div className="determinate green" style={{width:'60%'}}>
                               </div>
                               </div>
                               </div>
                               
                            <div className="col s6">
                            <p>JavaScript</p>
                            <div className="progress grey lighten-1">
                                <div className="determinate gray" style={{width:'50%'}}>
                            </div>
                            </div>
                            </div>

                            <div className="col s6">
                            <p>NodeJs</p>
                            <div className="progress grey lighten-1">
                                <div className="determinate blue" style={{width:'40%'}}>
                               </div>
                               </div>
                               </div>

                            <div className="col s6">   
                            <p>MongoDb</p>
                            <div className="progress grey lighten-1">
                                <div className="determinate red" style={{width:'50%'}}>
                               </div>
                               </div>
                               </div>

                            <div className="col s6">  
                             <p>React</p>
                            <div className="progress grey lighten-1">
                                <div className="determinate gray" style={{width:'30%'}}>
                               </div>
                               </div>
                           

                         </div>

                         

                     </div>
                 </div>
             </div>
            </div>
        )
    }
  
}
export default Skill;