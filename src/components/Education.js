import { Link } from '@material-ui/core';
import React,{Component} from 'react';

class Education extends Component {
    render(){
        return(
            <div>
              <div className='card'>
                  <div className='card-content'>
                      <h5>
                          <b>Education</b>
                      </h5>
                      <table className="striped">
                          <thead>
                              <tr>
                              <th>Certificate</th>
                              <th>Date</th>
                              <th></th>
                              </tr>
                            
                          </thead>
                          <tbody>
                              <tr>
                                  <td>SLC certificate</td>
                                  <td>2013 AD</td>
                                  <td><Link to='#' className='btn blue lighten-1'>View</Link></td>
                              </tr>
                              <tr>
                                  <td>+2 certificate</td>
                                  <td>2015 AD</td>
                                  <td><Link to='#' className='btn blue lighten-1'>View</Link></td>
                              </tr>
                              <tr>
                                  <td>BE Computer</td>
                                  <td>On Going</td>
                                  <td><Link to='#' className='btn blue lighten-1'>View</Link></td>
                              </tr>
                          </tbody>

                      </table>

                  </div>

              </div>
            </div>
        )
    }
  
}
export default Education;