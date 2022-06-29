import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/login/login-form";

export const Login = () => {
    const navigate = useNavigate();
    const onSubmit = (email, password) => {
        navigate("/");
    };

    return <LoginForm onSubmit={onSubmit} />;
};
