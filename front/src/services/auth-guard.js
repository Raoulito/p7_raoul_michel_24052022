import { useNavigate } from "react-router-dom";

export const authGuard = (navigate) => {
    const loginState = localStorage.getItem("isLogged");
    
    if (loginState === null) {
        navigate("/login");
    }
};
