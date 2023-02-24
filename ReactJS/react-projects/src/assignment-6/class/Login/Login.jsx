import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import useUsers from '../../hooks/useUsers';
import FormHeader from '../../../assignment/class/Login/FormHeader/FormHeader';
import Button from '../Button/Button';
import Input from '../Input/Input';
import InputField from './InputField/InputField';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './login.scss';

function Login() {
    const { findUser, loggedInUser } = useUsers();
    const [formInfo, setFormInfo] = useState({
        email: '',
        password: '',
        rememberMe : false
    })

    const handleChange = (e) => {
        const fieldName = e.target.name;
        setFormInfo(existingValues => ({
            ...existingValues,
            [fieldName]: fieldName === 'rememberMe'? !existingValues.rememberMe: e.target.value,
        }))
    }
    
    const handleClick = (event) => {
        event.preventDefault();
        findUser(formInfo);
        sessionStorage.setItem("activeUser", formInfo.email)
    }

    console.log(loggedInUser);
    
    return (
        <div className="" style={{width: '100%', height: '100vh', backgroundColor: 'black', display: 'flex', justifyContent:'center', alignItems: 'center'}}>
            <form action="" className='login-form'>
                <FormHeader />
                <div className="login-form__title">
                    Log In to Dashboard Kit
                </div>
                <div className="login-form__subtitle">
                    Enter your email and password below
                </div>

                <InputField type="text" name="email" text="Email" onChange={handleChange} formInfo={formInfo.email} placeholder="Email Address" />
                <InputField type="password" name="password" text="Password" onChange={handleChange} formInfo={formInfo.password} placeholder="Password"/>
                
                <input type="checkbox" name="rememberMe" className='login-form__remember-me' onChange={handleChange} checked={formInfo.rememberMe} />
                <label htmlFor="rememberMe">Remember me</label>
                
                <Button text="Log In" onClick={handleClick}/>
                <ToastContainer />

                <div className="login-form__instruction">
                    Don't have an account?<span><Link to="/">Sign Up</Link></span>
                </div>

                {loggedInUser && <Navigate to="/dashboard" replace="true" /> }

            </form>
        </div>
    )
}

export default Login;