import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/login/login-form";

export const Login = () => {
    const navigate = useNavigate();
    const onSubmit = (email, pwd) => {
        //API call res
        localStorage.setItem("isLogged", 'LOGGEDIN')
        navigate("/");
    };

    return (
    <LoginForm onSubmit={onSubmit} />
    );
};
