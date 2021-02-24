import React,{Component} from 'react';

class About extends Component {
    render(){
        return(
            <div>
              <div className="card">
                  <div className="card-content">
                      <h5 className="mt-bottom">
                         <b>About me</b>
                          </h5>
                        <p className="gray-text">
                       Hello its me jackson rai, i am from kathmandu Nepal. I am website developer can develope website focusing on small frims bussiness and comapany.
                        </p>
                     </div>
                     <div className="card-action">
                         <h5>
                             <b>Personal Info</b>
                         </h5>
                         <div className="row mt">
                             <div className="col s12 m6 l6 xl6">
                            <p>
                               <b>Address:</b> Kathmandu,Nepal
                            </p>
                            <p>
                                <b>Email:</b>Jacksonrai1996@gmail.com
                            </p>
                            <p>
                                <b>Number:</b>9808701617
                            </p>
                          
                             </div>
                             <div className="col s12 m6 l6 xl6">
                             <p>
                           <b>First Language:</b>Nepali
                                 </p>
                            <p>
                                <b>Second Language:</b>English
                                </p>
                         
                             </div>
                         </div>

                     </div>
                  </div>  

            </div>
        )
    }
  
}
export default About;