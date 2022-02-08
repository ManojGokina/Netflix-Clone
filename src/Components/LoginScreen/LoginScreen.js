import React, { useState } from 'react';
import SignIn from '../SignIn/SignIn';
import './LoginScreen.css'

const LoginScreen = () => {
  const [signIn , setSignIn] = useState(false);
  return (
      <div className='loginScreen'>
          <div className='loginScreen__background'>
            <img src='https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=5' alt='loginImage' className='loginLogo'/>
            <button className='loginScreen__Button' onClick={()=>setSignIn(true)}>Sign In</button>

            <div className='loginScreen__gradient'/>
          </div>

          <div className='loginScreen__body'>
            {signIn?(
              <SignIn/>
            ):
            <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere ,Cancel any time.</h2>
            <h3>Ready to watch?Enter your eamil to create or restart your membership</h3>

            <div className='loginScreen_input'>
              <form>
                <input type="email" placeholder="Email Adress" />
                 <button className='loginScreen__getStarted' onClick={()=>setSignIn(true)}>GET STARTED</button>
              </form>
            </div>
            </>}
           
          </div>
      </div>
  );
};

export default LoginScreen;
