import React from 'react';
import './loginsignup.styles.scss'
import Login from '../../components/login/login.component';
import SignUp from '../../components/sign-up/sign-up';

const LoginSignUp = () => (
    <div className="log-in-sign-up">
        <Login />
        <SignUp />
    </div>
)

export default LoginSignUp