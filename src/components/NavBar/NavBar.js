import React from 'react'
import "./NavBar.scss"
import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
        <div id="navCont">
            <div>
            <Link to="/">Home</Link>
            </div>
        </div>
    )
}
export default NavBar
