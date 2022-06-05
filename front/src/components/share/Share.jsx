import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import IosShareIcon from '@mui/icons-material/IosShare';

const StyledTextField = styled(TextField)({
    backgroundColor: "#fff",
    fontWeight: "bold",
    borderRadius: "15px",
    width: "90%",
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },
    "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
        },
    },
});

export default function Share() {
    return (
        <>
            <Card sx={{ maxWidth: "100%", backgroundColor: "lightgrey", display: "flex", borderRadius: "15px" }}>
                <StyledTextField sx={{ display: "flex", height: "50px", width: "100%", margin: "10px" }} placeholder="Quoi de neuf, Raoul ?" />

                <CardActions>
                    <Button size="small" style={{ color: "#4e5166", borderRadius: "15px", backgroundColor: "#ffd7d7", height: "50px" }}>
                        <AddPhotoAlternateIcon/>
                    </Button>

                    <Button size="small" style={{ color: "#4e5166", borderRadius: "15px", backgroundColor: "#ffd7d7", height: "50px" }}>
                        <IosShareIcon/>
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}
