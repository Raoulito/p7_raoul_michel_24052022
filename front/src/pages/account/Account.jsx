import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const maritalStatus = [
    {
        value: "1",
        label: "Célibataire",
    },
    {
        value: "2",
        label: "En couple",
    },
    {
        value: "3",
        label: "Je le garde pour moi",
    },
];

export default function Account() {
    const [currency, setCurrency] = React.useState();

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    return (
        <>
            <Card sx={{ maxWidth: "50%", backgroundColor: "lightgrey", borderRadius: "15px", display: "flex", flexDirection: "row", mb: "15px" }}>
                <CardContent sx={{ display: "flex", textAlign: "center", justifyContent: "center" }}>Mettez à jour vos informations personnelles ici, Raoul.</CardContent>
            </Card>

            <div>
                Ville d'origine : <TextField id="outlined-basic" label="D'où venez-vous ?" variant="outlined" />
            </div>
            <div>
                Ville actuelle : <TextField id="outlined-basic" label="Où habitez-vous ?" variant="outlined" />
            </div>

            <div>Date de naissance :</div>
            <div>
                Relation :
                <Box
                    component="form"
                    sx={{
                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField id="outlined-select-currency" select label="Choisissez" value={currency} onChange={handleChange} helperText="Indiquez votre statut marital">
                            {maritalStatus.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                </Box>
            </div>
            <Button variant="contained">Mettre à jour mes informations</Button>

            <Button variant="contained" sx={{ color: "red" }}>
                supprimer mon compte
            </Button>
        </>
    );
}
