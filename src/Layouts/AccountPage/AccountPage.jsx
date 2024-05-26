import React, { useState } from 'react'
import Header from 'Layouts/LayoutsHome/Header';
import './AccountPage.css';
const AccountPage = () => {
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

    const RegisterForm = () => {
        const [newAccount, setNewAccount] = useState(true)
        const Name = '';
        const Email = '';
        const Password = '';
        if (newAccount) {
            
        }
        return (
            <form>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" />
                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Your Email" />
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Your Password" />
                <button type="submit">Register</button>
            </form>
        );
    };


    const SwitchMethod = () => {
        const [method, setMethod] = useState('Login')
        if (method === 'Login') {
            return (
                <div>
                    <div className='setMethods'>
                        <button className={method === 'Login' ? 'activeButton' : ''} onClick={() => setMethod('Login')}>Login</button>
                        <button className={method === 'Register' ? 'activeButton' : ''} onClick={() => setMethod('Register')}>Register</button>
                    </div>
                    <LoginForm />
                </div>
            );
        }
        if (method === 'Register') {
            return (
                <div>
                    <div className='setMethods'>
                        <button className={method === 'Login' ? 'activeButton' : ''} onClick={() => setMethod('Login')}>Login</button>
                        <button className={method === 'Register' ? 'activeButton' : ''} onClick={() => setMethod('Register')}>Register</button>
                    </div>
                    <RegisterForm />
                </div>

            );
        }
        return (
            <div>

            </div>
        );

    }






    return (
        <div>
            <Header />
            <div className='container'>
                <SwitchMethod />
            </div>
        </div>
    )
}

export default AccountPage