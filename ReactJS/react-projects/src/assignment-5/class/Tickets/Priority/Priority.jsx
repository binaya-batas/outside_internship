import { useState } from 'react';
import './priority.scss';

function Priority({text, btnColor}) {
    // const [btnColor, setBtnColor] = useState("");

    return (
        <button className={`btn btn-${btnColor}`}>
            {text}
        </button>
    )
}

export default Priority