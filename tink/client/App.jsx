import React,{Component} from 'react';
import SideBar from './components/SideBar/index.jsx';
import cards from './components/cards/index.jsx';
import * as Cookies from 'js-cookie';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
    
      constructor(props) {
        super(props);
        this.state = { 
          isLoggedIn: Cookies.get('isLoggedIn')
        }
      }

      render() {

     return(
      <div>
       <Router>
          <div className="ContentPane d-flex">
            <SideBar />
             <div className="content">
              
             </div>
          </div>
       </Router>     
      </div>    
      );
     }
   }

   export default App;