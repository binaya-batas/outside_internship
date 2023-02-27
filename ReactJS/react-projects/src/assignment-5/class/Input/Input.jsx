import './input.scss';

function Input({ type, checkboxName, text, handlePriority }) {
    return (
        <div className="input">
            <input type={type} name="priority" id={checkboxName} onChange={handlePriority} value={checkboxName}/>
            <label htmlfor={checkboxName}>{text}</label>
        </div>
    )
}

export default Input;