import React from 'react';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';
import { logoutRequest } from '../actions'

import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/craneo.png';
import logo2 from '../assets/static/logo.png';

const Header = ({user,logoutRequest}) => {
    const hasUser = Object.keys(user).length > 0;
    const handleLogout = () =>{
        logoutRequest({})
    }
    return (
    
        <header className="header">
            <Link to="/">
                <img className="header__img" src={logo2} alt=""/>
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={ hasUser ? gravatar(user.email) : logo} alt={user.email}/>
                    <p>Profile</p>
                </div>

                <ul>
                    {
                        hasUser ? 
                         <li>
                            <Link to="/">
                                {user.email}
                            </Link>
                        
                         </li>
                        :
                        <></>
                        
                    }
                   {
                        hasUser ?
                            <li>
                                <a href="#" onClick={handleLogout}>
                                    LogOut
                                </a>
                                    
                                

                            </li>
                        :
                            <li>
                                <Link to="/login">
                                    Login
                                </Link>

                            </li>
                   }
                    
                </ul>
            </div>
        </header>
    )
}

const mapStateToProps = state =>{
    return{
        user: state.loginReducer.user
    }
}

const mapDispatchToProps = {
    logoutRequest
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)