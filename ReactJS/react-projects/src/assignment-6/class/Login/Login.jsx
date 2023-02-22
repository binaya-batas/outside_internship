import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import useUsers from '../../hooks/useUsers';
import FormHeader from '../../../assignment/class/Login/FormHeader/FormHeader';
import Button from '../Button/Button';
import Input from '../Input/Input';
import InputField from './InputField/InputField';

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
        if (loggedInUser) {
            console.log('logged in.');
            navigate('/tickets', {replace: true})
        } else {
            navigate('/login');
        }
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

                <InputField type="text" name="email" text="Email" onChange={handleChange} formInfo={formInfo.email} />
                <InputField type="password" name="password" text="Password" onChange={handleChange} formInfo={formInfo.password}/>
                
                <input type="checkbox" name="rememberMe" className='login-form__remember-me' onChange={handleChange} checked={formInfo.rememberMe} />
                <label htmlFor="rememberMe">Remember me</label>
                
                <Button text="Log In" onClick={handleClick}/>

                {loggedInUser && <Navigate to="/tickets" replace="true" /> }

            </form>
        </div>
    )
}

export default Login;