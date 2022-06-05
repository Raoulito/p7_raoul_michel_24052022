import React from "react";
import Feed from "../../components/feed/Feed";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

export default function Profile() {
    return (
      <>
        <Card sx={{ maxWidth: "100%", backgroundColor: "lightgrey", borderRadius: "15px", display: "flex", flexDirection: "column" }}>
            <CardMedia component="img" height="220" image="/static/images/cards/contemplative-reptile.jpg" alt="Photo de couverture" />
            <CardContent sx={{ display: "flex", pl:"200px" }}>
                <Avatar alt="Photo de profile" src="/static/images/avatar/1.jpg" sx={{ width: 180, height: 180, zIndex:"1" }} />
            </CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold", fontSize: "2.5em", mt: "-50px", pl:"300px", zIndex: "2" }}>
                Username
            </Typography>
            <Typography variant="h5" component="div">
Bio        </Typography>
        </Card>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Ville actuelle
        </Typography>
        <Typography variant="h5" component="div">
Ville d'origine
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Date de naissance
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Feed/>
        </>
    );
}
