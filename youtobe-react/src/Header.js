import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <img
            className="header-icon"
            src="https://i.pinimg.com/236x/6c/de/6a/6cde6ad49f137539b1d05c6ac6ea16c4.jpg"
            alt=""
            />


            <div className="header-center">
                <input type='text' />
                <SearchIcon/>
            </div>
        </div>

        
    )
}

export default Header
