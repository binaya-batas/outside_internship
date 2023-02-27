import logo from '../../../images/logo.png';

import './form-header.scss';


function FormHeader() {
    return (
        <div className="form-header">
            <div className="form-header__img">
                <img src={logo} alt="logo" />
            </div>
            <div className="form-header__title">
                Dashboard Kit
            </div>
        </div>
    )
}

export default FormHeader;