import './button.scss'

function Button({ text, ...rest }) {
    return (
        <button className='button' {...rest}>
            {text}
        </button>
    )
}

export default Button;