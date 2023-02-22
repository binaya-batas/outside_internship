import './input-field.scss';
import { useState } from 'react';

function InputField({ text, formInfo, ...rest}) {
    
    return (
        <div className="input-field">
            <label htmlfor={rest.name} className="input-field__label">{text}</label> <br/>        
            
            <input
             className="input-field__box" 
             value={formInfo}
             {...rest}
            />
        </div>
    )
}

export default InputField;