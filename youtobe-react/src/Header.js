import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MicIcon from '@material-ui/icons/Mic';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/icons/AccountCircle';
// import { render } from '@testing-library/react';


class Header extends React.Component {

    state = {
        term: ''
    }

onInputChange = (event) => {
this.setState({term: event.target.value});
}


onFormSubmit = (event) => {
   event.preventDefault();
   this.props.onFormSubmit(this.state.term); 
}

render(){
    return (
        <div className="header">
            <img
            className="header-icon"
            src="https://i.pinimg.com/236x/46/dd/91/46dd9133547bbaab4209fb5d0d06ae98.jpg"
            
            alt=""
            />


            <div className="header-center">
            <form onSubmit={this.onFormSubmit}>
                <input type='text' 
                value={this.state.term} 
                onChange={this.onInputChange}/>
                <SearchIcon type="submit" value="search"/>
                < MicIcon  />
            </form>
            </div>

            

            <div className='header-right'>
                
                <VideoCallIcon/>
                <AppsIcon/>
                <NotificationsIcon/>
                <Avatar/>
            </div>
        </div>

        
    )
}
}

export default Header;
