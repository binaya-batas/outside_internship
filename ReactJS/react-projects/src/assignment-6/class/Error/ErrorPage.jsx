import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

function ErrorPage() {
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1)
    }

    return(
        <div className="" style={{
            width: '100%', 
            height: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center'}}
        >
            <div className="">
                <span style={{color: 'red', fontSize: '96px', fontWeight: '700'}}>404</span>
                <span>Page Not Found</span>
            </div>
            <div className="">
                <Button text="Go Back" onClick={handleBackButton} />         
            </div>
        </div>

    )
}

export default ErrorPage;