import propTypes from 'prop-types';
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.png"
import "../../styles/Layout.css"

/**
* Header layout
* @param {string} firstname 
* @component
*/
export default function Header ({firstname}) {

    const currentUrl = useLocation();

    const homeHeader = () => {
        return (
            <div>
                <NavLink className="main-nav-item" to="/login" >
                    <i className="fa fa-user-circle"></i>Sign In 
                </NavLink>
            </div>
        )  
    }

    const profileHeader = () => {
        return (
            <div>
                <span className="main-nav-name"><i className="fa fa-user-circle"></i>{firstname}</span>
                <NavLink className="main-nav-item" to="/home" >
                    <i className="fa fa-sign-out"></i>Sign Out
                </NavLink>
            </div>
        )
    }

    return (
        <section className="header">
            <nav className="main-nav">
                <NavLink className="main-nav-logo" to="/home" >               
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                {currentUrl.pathname.includes("/profile") ? profileHeader() : homeHeader()}
            </nav>
        </section>
        
    )
}


Header.propTypes = {
    firstname: propTypes.string,
}
