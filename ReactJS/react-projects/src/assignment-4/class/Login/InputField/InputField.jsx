import './input-field.scss';
import { useState } from 'react';

function InputField({ inputName, text, type, handleChange, formInfo}) {
    
    return (
        <div className="input-field">
            <label htmlfor={inputName} className="input-field__label">{text}</label> <br/>        
            
            <input
             type={type} 
             name={inputName} 
             id={inputName} 
             placeholder={text} 
             className="input-field__box" 
             onChange={handleChange} 
             value={formInfo} 
            />
        </div>
    )
}

export default InputField;