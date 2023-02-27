import { useState } from 'react';
import useUsers from '../../hooks/useUsers';
import FormHeader from './FormHeader/FormHeader';
import Button from '../Button/Button';
import Input from '../Input/Input';
import InputField from './InputField/InputField';

import './login.scss';
import { Navigate } from 'react-router-dom';

function Login() {
    const [formInfo, setFormInfo] = useState({
        email: '',
        password: '',
        rememberMe : false
    })
    const [loggedInUser, setLoggedInUser] = useState(false)

    const { getUsers, users } = useUsers();

    const handleChange = (e) => {
        const fieldName = e.target.name;
        setFormInfo(existingValues => ({
            ...existingValues,
            [fieldName]: fieldName === 'rememberMe'? !existingValues.rememberMe: e.target.value,
        }))
    }

    const handleClick = (event) => {
        event.preventDefault();
        getUsers();

        let user = users.some((user) =>
            user.email === formInfo.email &&
            user.password === formInfo.password
        );
        console.log(user);
        if (user) {
            setLoggedInUser(true);
        }
    }
    
    
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

            </form>
            {
                loggedInUser && <Navigate to="/dashboard" replace={true} />
            }
        </div>
    )
}

export default Login;