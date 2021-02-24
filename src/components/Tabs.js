import React,{Component} from 'react';

import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import ReactCard from './ReactCard';
class Tabs extends Component {
    componentDidMount() {
        M.Tabs.init(this.Tabs);
      }
    render(){
        return(
          
            <>
            <ul
              ref={Tabs => {
                this.Tabs = Tabs;
              }}
              id="tabs-swipe-demo"
              className="tabs tabs-fixed-width tab-demo z-depth-1"
            >
             
    <li className="tab"><a href="#test1">React</a></li>
    <li className="tab"><a class="active" href="#test2">Node Js</a></li>

    <li className="tab"><a href="#test3">MongoDb</a></li>
    <li className="tab"><a href="#test4">JavaScript</a></li>
  </ul>
 <div className='container'>
 <div id="test1" className="col s8"><ReactCard/></div>
  <div id="test2" className="col s12"></div>
  <div id="test3" className="col s12"></div>
  <div id="test4" className="col s12"></div>
 </div>
  
                
               
             


          </>
        )
    }
  
}
export default Tabs;