import { useState } from 'react';
import './button.scss';

function Button({text, btnColor}) {
    // const [btnColor, setBtnColor] = useState("");

    return (
        <button className={`btn btn-${btnColor}`}>
            {text}
        </button>
    )
}

export default Button