import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavComponent extends Component {
    render() {
        return(
            <div className="header-nav">
                <nav className="navbar navbar-dark bg-dark">
                    <img className="navbar-brand" src="./logo192.png" alt="img"/>
                    <Link to="/" >Home</Link>                            
                    <Link to="/textencrypt" >Text Encryption</Link>                            
                    <Link to="/itteam" >Secure the Network</Link>                            
                </nav>
            </div>
        )
    }
}

export default NavComponent;