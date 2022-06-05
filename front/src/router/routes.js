import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import Account from "../pages/account/Account";
import {Login} from "../pages/login/Login";


export const GroupoManiaRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};
