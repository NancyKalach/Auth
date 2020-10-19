import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {

    const sessionLinks = () => (
        <ul className = "login-signup">
            <li>
                <Link className="login" to = "/login"> Login </Link>
            </li>

            <li>
                <Link className="signup" to = "/signup"> Sign up! </Link>
            </li>
        </ul>
    );

    const personalGreeting = () => (
        <ul className = "login-signup">
            <li> Hi, {currentUser.username} ! </li>
            <li>
                <button className = "header-button" onClick = {logout}> Log Out</button>
            </li>
        </ul>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;