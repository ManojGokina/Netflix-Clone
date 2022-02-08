import React , {useRef} from 'react';
import './SignIn.css';
import { auth } from '../../firebase';

const SignIn = () => {
      
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const Register =(e)=>{
        e.preventDefault();

        // auth.createUserWithEmailAndPassword(
        //     emailRef.current.value,
        //     passwordRef.current.value
        // )
        // .then((authUser)=>{
        //     console.log(authUser)
        // })
        // .catch((error)=>{
        //     alert(error.message)
        // });
    }

    const signIN=(e)=>{
        e.preventDefault();
        // auth.createUserWithEmailAndPassword(
        //     emailRef.current.value,
        //     passwordRef.current.value
        // )
        // .then((authUser)=>{
        //     console.log(authUser)
        // })
        // .catch((error)=>{
        //     alert(error.message)
        // });
    }
  return (
      <div className='signUpScreen'>
          <form>
              <h1>Sign In</h1>

              <input ref={emailRef} placeholder='Email' type='email'/>
              <input ref={passwordRef} placeholder='Password' type='password' />
              <button type='submit' onClick={signIN}>Sign In</button>

              <h4>
                  <span className='signupScreen__gray'>New to Netflix? </span>
                 <span className='signupScreen__link' onClick={Register}> Sign Up now.</span>
              </h4>
          </form>
      </div>
  );
};

export default SignIn;
