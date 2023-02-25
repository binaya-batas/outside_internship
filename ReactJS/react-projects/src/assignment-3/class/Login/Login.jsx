import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import FormHeader from './FormHeader/FormHeader';
import InputField from './InputField/InputField';

import './login.scss';

function Login() {
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
    
    console.log(formInfo);


    return (
        <div className="" style={{width: '100%', height: '100vh', backgroundColor:'black', display: 'flex', justifyContent:'center', alignItems: 'center'}}>
            <form action="" className='login-form'>
                <FormHeader />

                <div className="login-form__title">
                    Log In to Dashboard Kit
                </div>
                <div className="login-form__subtitle">
                    Enter your email and password below
                </div>

                <InputField type="text" placeholder="Email Address" name="email" text="Email" onChange={handleChange} formInfo={formInfo.email} />
                <InputField type="password" placeholder="Password" name="password" text="Password" onChange={handleChange} formInfo={formInfo.password}/>
                
                <input type="checkbox" name="rememberMe" className='login-form__remember-me' onChange={handleChange} checked={formInfo.rememberMe} />
                <label htmlFor="rememberMe">Remember me</label>
                
                <Button text="Log In" />

                <div className="login-form__instruction">
                    Don't have an account?<span><Link to="/">Sign Up</Link></span>
                </div>
            </form>
        </div>
    )
}

export default Login;