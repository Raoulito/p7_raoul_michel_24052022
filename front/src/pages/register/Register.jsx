import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirm = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordConfirm.current.value !== password.current.value) {
            passwordConfirm.current.setCustomValidity("Les mots de passe ne correspondent pas");
        } else {
            const user = {
                username: username.current.value,
                password: password.current.value,
                email: email.current.value,
            };
            console.log(user);
            try {
                await axios.post("http://localhost:27017/api/auth/register", user);
                navigate("/login");
            } catch (err) {
                alert("Quelque chose s'est mal passé");
                console.log(err);
            }
        }
    };

    return (
        <>
            <form>
                <Box display="flex" sx={{ position: "sticky" }}>
                    <img src="http://localhost:27017/images/assets/logos/icon-left-font.png" width="300px" alt="Logo Groupomania" />
                </Box>
                <Card sx={{ maxWidth: "50%", backgroundColor: "lightgrey", borderRadius: "15px", display: "flex", flexDirection: "row", mb: "15px" }}>
                    <CardContent sx={{ display: "flex", textAlign: "center", justifyContent: "center" }}>Créez votre compte simplement. Votre nom, un email et un mot de passe suffisent !</CardContent>
                </Card>

                <Card sx={{ maxWidth: "50%", backgroundColor: "lightgrey", borderRadius: "15px", mb: "15px" }}>
                    <TextField type="text" required inputRef={username} label="Votre nom :" color="secondary" focused variant="filled" sx={{ width: "100%" }} />
                </Card>

                <Card sx={{ maxWidth: "50%", backgroundColor: "lightgrey", borderRadius: "15px", mb: "15px" }}>
                    <TextField type="email" required inputRef={email} label="Votre email :" color="secondary" focused variant="filled" sx={{ width: "100%" }} />
                </Card>

                <Card sx={{ maxWidth: "50%", backgroundColor: "lightgrey", borderRadius: "15px", mb: "15px" }}>
                    <TextField type="password" minLength="6" required inputRef={password} label="Mot de passe :" color="secondary" focused variant="filled" sx={{ width: "100%" }} />
                </Card>

                <Card sx={{ maxWidth: "50%", backgroundColor: "lightgrey", borderRadius: "15px", mb: "15px" }}>
                    <TextField type="password" required inputRef={passwordConfirm} label="Confirmez le mot de passe :" color="secondary" focused variant="filled" sx={{ width: "100%" }} />
                </Card>

                <Button variant="contained" onClick={handleClick}>
                    Créer mon compte
                </Button>
            </form>
        </>
    );
}
