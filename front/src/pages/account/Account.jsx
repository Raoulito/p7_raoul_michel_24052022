import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stack from "@mui/material/Stack";

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
    const [marStatus, setMarStatus] = React.useState();
    const [value, setValue] = React.useState(new Date());

    const handleChange = (event) => {
        setMarStatus(event.target.value);
    };
    return (
        <>
            <Card sx={{ maxWidth: "50%", backgroundColor: "lightgrey", borderRadius: "15px", display: "flex", flexDirection: "row", mb: "15px" }}>
                <CardContent sx={{ display: "flex", textAlign: "center", justifyContent: "center" }}>Mettez à jour vos informations personnelles ici, Raoul.</CardContent>
            </Card>

            <Card sx={{ maxWidth: "50%", borderRadius: "15px", mb: "15px" }}>
                Ville d'origine : <TextField id="outlined-basic" label="D'où venez-vous ?" variant="outlined" />
            </Card>
            <Card sx={{ maxWidth: "50%", borderRadius: "15px", mb: "15px" }}>
                Ville actuelle : <TextField id="outlined-basic" label="Où habitez-vous ?" variant="outlined" />
            </Card>
            <Card sx={{ maxWidth: "50%", borderRadius: "15px", mb: "15px" }}>
                Date de naissance :{" "}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
 
                        <DatePicker
                            disableFuture
                            label="Date de naissance"
                            openTo="year"
                            views={["year", "month", "day"]}
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
            </Card>
            <Card sx={{ maxWidth: "50%", borderRadius: "15px", mb: "15px", display: "flex", flexDirection: "row" }}>
                Relation :
                <Box
                    component="form"
                    sx={{
                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Card sx={{ borderRadius: "15px", mb: "15px" }}>
                        <TextField id="outlined-select-currency" select label="Choisissez" value={marStatus} onChange={handleChange} helperText="Indiquez votre statut marital">
                            {maritalStatus.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Card>
                </Box>
            </Card>
            <Card sx={{ maxWidth: "50%", borderRadius: "15px", mb: "15px" }}>
                Ajoutez une photo de profil :{" "}
                <Button size="small" style={{ color: "#4e5166", borderRadius: "15px", backgroundColor: "#ffd7d7", height: "50px" }}>
                    <AddPhotoAlternateIcon />
                </Button>
            </Card>
            <Card sx={{ maxWidth: "50%", borderRadius: "15px", mb: "15px" }}>
                Ajoutez une photo de couverture :{" "}
                <Button size="small" style={{ color: "#4e5166", borderRadius: "15px", backgroundColor: "#ffd7d7", height: "50px" }}>
                    <AddPhotoAlternateIcon />
                </Button>
            </Card>
            <Button variant="contained">Mettre à jour mes informations</Button>

            <Button variant="contained" sx={{ color: "red" }}>
                supprimer mon compte
            </Button>
        </>
    );
}
