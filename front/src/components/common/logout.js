import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export const Logout = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("isLogged");
        navigate("/login");
    };
    return (
                <Button variant="contained" onClick={logout}>Me déconnecter</Button>    
    );
};