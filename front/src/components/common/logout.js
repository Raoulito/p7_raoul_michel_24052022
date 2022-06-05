import { useNavigate } from "react-router-dom";

export const Logout = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("isLogged");
        navigate("/login");
    };
    return (
        <button onClick={logout}>
            Log out
        </button>
    );
};
