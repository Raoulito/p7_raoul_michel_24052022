import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

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
     
    <Card sx={{ maxWidth: "100% ", backgroundColor:"lightgrey", display:"flex"}}>


        <StyledTextField
                        sx={{ display: "flex", height:"50px", width:"100%", margin:"10px"}}
                        placeholder="Quoi de neuf, Raoul ?"
                       
                    />

      <CardActions>

        <Button size="small" style={{color: "#4e5166", borderRadius:"15px", backgroundColor:"#ffd7d7", height:"50px"}}>Ajouter des photos / vidéos</Button>
        
        <Button size="small" style={{color: "#4e5166", borderRadius:"15px", backgroundColor:"#ffd7d7", height:"50px"}}>Publier</Button>
      </CardActions>
    </Card>
    
    </>
  );
}
