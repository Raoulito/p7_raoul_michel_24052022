import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

export const LoginForm = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:27017/api/auth/login", { email, password });
            onSubmit(res.data);
            localStorage.setItem("isLogged", res.data.userId);
            localStorage.setItem("isAdmin", res.data.isAdmin);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Box sx={{ display: "flex", justifyItems: "center" }}>
                <form>
                    <Box>
                        <img src="http://localhost:27017/images/assets/logos/icon-left-font.png" width="300px" alt="Logo Groupomania" />
                    </Box>
                    <Card sx={{ backgroundColor: "lightgrey", borderRadius: "15px", display: "flex", flexDirection: "row", mb: "15px" }}>
                        <CardContent sx={{ display: "flex", textAlign: "center", justifyContent: "center" }}>Connectez-vous ici avec votre email et votre mot de passe.</CardContent>
                    </Card>

                    <Card sx={{ backgroundColor: "lightgrey", borderRadius: "15px", mb: "15px" }}>
                        <TextField type="email" label="Email" color="secondary" focused variant="filled" sx={{ width: "100%" }} onChange={(e) => setEmail(e.target.value)} />
                    </Card>

                    <Card sx={{ backgroundColor: "lightgrey", borderRadius: "15px", mb: "15px" }}>
                        <TextField type="password" label="Mot de passe" color="secondary" focused variant="filled" sx={{ width: "100%" }} onChange={(e) => setPassword(e.target.value)} />
                    </Card>

                    <Button variant="contained" onClick={submit}>
                        Me connecter
                    </Button>
                    <div>
                        <Link to="/register">Pas de compte ? Enregistrez vous ici.</Link>
                    </div>
                </form>
            </Box>
        </>
    );
};
