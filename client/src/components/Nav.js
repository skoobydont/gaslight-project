import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavComponent extends Component {
    render() {
        return(
            <div className="header-nav">
                <nav className="navbar navbar-dark bg-dark">
                    <Link to="/" ><img className="navbar-brand" src="./logo192.png" alt="img"/></Link>                            
                    <Link to="/textencrypt" className="navigation-link">Text Encryption</Link>                            
                    <Link to="/itteam" className="navigation-link">Secure the Network</Link>
                    <Link to="/meanpi" className="navigation-link">MEAN Stack</Link>                         
                </nav>
            </div>
        )
    }
}

export default NavComponent;