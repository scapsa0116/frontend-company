import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  
  } from "react-router-dom";
  import TextComponent from './components/TextComponent'

class App extends React.Component{



    render(){
        return (
            <Router>
                
                <ul className="flex border-b">
                <NavLink to= '/text'>
                <div className="-mb-px mr-1">
                    <a className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-grey-700 font-semibold hover:text-blue-800" href="#">Text</a>
                </div>
                </NavLink>
                <div className="mr-1">
                    <a className="bg-white inline-block py-2 px-4 text-grey-500 hover:text-blue-800 font-semibold" href="#">Charter</a>
                </div>
                </ul>
                
            <div>
            <Switch>
               <Route exact path = '/text'>
               <TextComponent/>
               </Route>
               </Switch>
            </div>
            </Router>
        )
    }
}

export default App;