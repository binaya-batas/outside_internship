import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../Login/InputField/InputField';
import Button from '../Button/Button';
import './signup.scss';
import FormHeader from '../Login/FormHeader/FormHeader';

function Signup() {
    const [formInfo, setFormInfo] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: ''
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
            <form action="" className='signup-form'>
                <FormHeader />

                <div className="signup-form__title">
                    Sign Up to Dashboard Kit
                </div>

                <InputField type="text" name="fullname" placeholder="Fullname" text="full name" onChange={handleChange} formInfo={formInfo.fullname} />
                <InputField type="email" name="email" placeholder="Email address" text="Email Address" onChange={handleChange} formInfo={formInfo.email}/>
                <InputField type="password" name="password" placeholder="Password" text="Password" onChange={handleChange} formInfo={formInfo.password}/>
                <InputField type="password" name="confirmPassword" placeholder="Confirm Password" text="Confirm Password" onChange={handleChange} formInfo={formInfo.confirmPassword}/>
                
                <Button text="Sign Up" />

                <div className="signup-form__instruction">
                    Already have an account?<span><Link to="/login">Log In</Link></span>
                </div>
            </form>
        </div>
    )
}

export default Signup;