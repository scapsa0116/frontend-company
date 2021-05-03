import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import TextComponent from "./components/TextComponent";
import Body from "./components/Body";
import NavBar from "./components/NavBar";
import EditDocument from "./components/EditDocument";
import Edit from "./demo/Edit";

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />

        <ul className='flex border-b'>
          <NavLink to='/'>
            <div className='-mb-px mr-1'>
              <a
                className='bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-grey-700 font-semibold hover:text-blue-800'
                href='text'
              >
                Text
              </a>
            </div>
          </NavLink>
          <NavLink to='/documents/new/create'>
            <div className='mr-1'>
              <a
                className='bg-white inline-block py-2 px-4 text-grey-500 hover:text-blue-800 font-semibold'
                href="/text/new'"
              >
                Charter
              </a>
            </div>
          </NavLink>

          <NavLink to='/edit'>
            <div className='-mb-px mr-1'>
              <a
                className='bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-grey-700 font-semibold hover:text-blue-800'
                href='text'
              >
                Editable
              </a>
            </div>
          </NavLink>
        </ul>

        <div>
          <Switch>
            <Route exact path='/'>
              <TextComponent />
            </Route>
            <Route exact path='/documents/new/create'>
              <Body />
            </Route>
            <Route exact path='/documents/:documentId' component={Edit}></Route>

            <Route exact path='/edit' component={Edit}></Route>

            {/* <Route exact path ="/documents/:documentId" component={EditDocument}>
                  
               </Route> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
