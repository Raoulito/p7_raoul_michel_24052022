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
        <Card sx={{ maxWidth: "100%", backgroundColor: "lightgrey", display: "flex", borderRadius: "15px", display: "flex", flexDirection: "column" }}>
            <CardMedia component="img" height="220" image="/static/images/cards/contemplative-reptile.jpg" alt="Photo de couverture" />
            <CardContent sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Avatar alt="Photo de profile" src="/static/images/avatar/1.jpg" sx={{ width: 160, height: 160 }} />
            </CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold", fontSize: "2.5em", mt: "-50px", textAlign: "center", zIndex: "2" }}>
                Username
            </Typography>
        </Card>
    );
}
