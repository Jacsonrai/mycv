
import { Layout } from 'react-mdl';

import { Content } from 'react-mdl';
import Main from './components/main'
import './App.css';
import { Component } from 'react';
import Nav from "./components/Nav";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';





class App extends Component{
    render(){
        return (
            <div className="App">
        <div className="demo-big-content">
          
        <Layout>\
          
                   <Nav/>
                    <Main/>
                  
                    
              
            </Layout>
        </div>
            </div>
          );
        }
    }


export default App;
