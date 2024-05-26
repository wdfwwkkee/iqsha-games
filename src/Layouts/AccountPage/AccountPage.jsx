import React, { useState } from 'react'
import Header from 'Layouts/LayoutsHome/Header';
import './AccountPage.css';
import { useNavigate } from 'react-router-dom';
const AccountPage = () => {
    const [authAccount, setAuthAccount] = useState(false);
    


    const LoginForm = () => {
        return (
            <form>
                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Your Email" />
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Your Password" />
                <button type="submit">Login</button>
            </form>
        );
    };


    return (
        <div>
            <Header />
            <div className='butttonContainer'>
                <button className="activeButton">Login</button>
            </div>
            <div className="loginForm">
                <LoginForm />
            </div>
        </div>
    )
}

export default AccountPage 