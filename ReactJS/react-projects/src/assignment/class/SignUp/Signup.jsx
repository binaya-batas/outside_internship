import { useState } from 'react';
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
        <form action="" className='signup-form'>
            <FormHeader />

            <div className="signup-form__title">
                Sign Up to Dashboard Kit
            </div>

            <InputField type="text" name="fullname" text="full name" onChange={handleChange} formInfo={formInfo.fullname} />
            <InputField type="email" name="email" text="Email Address" onChange={handleChange} formInfo={formInfo.email}/>
            <InputField type="password" name="password" text="Password" onChange={handleChange} formInfo={formInfo.password}/>
            <InputField type="password" name="confirmPassword" text="Confirm Password" onChange={handleChange} formInfo={formInfo.confirmPassword}/>
            
            <Button text="Sign Up" />
        </form>
    )
}

export default Signup;