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
import Edittext from "./components/Edittext";
import Document from "./components/Document";

class App extends React.Component {
  render() {
    const { currentUser } = this.props;
    console.log(currentUser);
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
          <NavLink to='/documents'>
            <div className='-mb-px mr-1'>
              <a
                className='bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-grey-700 font-semibold hover:text-blue-800'
                href='text'
              >
                Documents
              </a>
            </div>
          </NavLink>
          <NavLink to='/test'>
            <div className='-mb-px mr-1'>
              <a
                className='bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-grey-700 font-semibold hover:text-blue-800'
                href='text'
              >
                Test
              </a>
            </div>
          </NavLink>
          {/* <NavLink to='/documents'></NavLink> */}
        </ul>

        <div>
          <Switch>
            {/* <Route exact path='/'>
              <TextComponent />
            </Route> */}

            <Route exact path='/' component={Body}>
              <Body />
            </Route>
            <Route exact path='/documents' component={TextComponent}>
              {/* <TextComponent /> */}
            </Route>
            <Route
              exact
              path={`/documents/:documentId`}
              component={Edittext}
            ></Route>
            <Route exact path={`/test`} component={Document}></Route>

            {/* <Route exact path ="/documents/:documentId" component={EditDocument}>
                  
               </Route> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
