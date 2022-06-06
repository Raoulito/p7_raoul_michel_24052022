import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Logo from "../../assets/logos/icon-left-font.png";
import { useState } from "react";

export const Register = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const submit = (e) => {
        e.preventDefault();
        onSubmit(email, pwd);
        console.log(email, pwd);
    };



    return (
        <>
            <form>
                <Box display="flex" sx={{ position: "sticky" }}>
                    <img src={Logo} width="300px" alt="Logo Groupomania"/>
                </Box>
                <Card sx={{ maxWidth: "50%", backgroundColor: "lightgrey", borderRadius: "15px", display: "flex", flexDirection: "row", mb: "15px" }}>
                    <CardContent sx={{ display: "flex", textAlign: "center", justifyContent: "center" }}>Créez votre compte simplement, un email et un mot de passe suffisent !</CardContent>
                </Card>

                <Card sx={{ maxWidth: "50%", backgroundColor: "lightgrey", borderRadius: "15px", mb: "15px" }}>
                    <TextField type="email" label="Email" color="secondary" focused variant="filled" sx={{ width: "100%" }} onChange={(e) => setEmail(e.target.value)} />
                </Card>

                <Card sx={{ maxWidth: "50%", backgroundColor: "lightgrey", borderRadius: "15px", mb: "15px" }}>
                    <TextField type="password" label="Mot de passe" color="secondary" focused variant="filled" sx={{ width: "100%" }} onChange={(e) => setPwd(e.target.value)} />
                </Card>

                <Button variant="contained" onClick={submit}>Créer mon compte</Button>
            </form>
        </>
    );
}
