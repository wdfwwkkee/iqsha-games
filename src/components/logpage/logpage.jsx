import React from 'react'
import Header from 'Layouts/LayoutsHome/Header'





const logpage = () => {
    const signupButton = 12;
    const signinButton = 131;
  return (
    <div>
        <Header />
        <div className='Wrapper'>

            <div className='reg-container'>
                <form action='#'>
                    <h1>Sign up</h1> 
                    <input type="text" placeholder="Name" />
			        <input type="email" placeholder="Email" />
			        <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>

            <div className='log-container'>
                    <form action="#">
                        <h1>Sigh in</h1>
                        <input type='text' placeholder='Name'/>
                        <input type="email" placeholder="Email" />
			            <input type="password" placeholder="Password" />
                        <button>Sign in</button>
                    </form>
            </div>

        </div>
    </div>
  )
}

export default logpage

// https://codepen.io/FlorinPop17/pen/vPKWjd