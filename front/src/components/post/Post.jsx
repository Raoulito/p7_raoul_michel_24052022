import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Sandwich from "../../assets/post/sandwich.jpeg";

export default function MediaCard() {
    return (
        <Card sx={{ maxWidth: "100%", mt: "10px", backgroundColor: "lightgrey" }}>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Avatar sx={{ m: "5px" }} /> Kévin, le date/timeago
            </Box>
            <Box sx={{ px: "15px" }}>
                <CardMedia sx={{ height: "240px", width: "100%", borderRadius: "15px", backgroundImage: `url(${Sandwich})` }} />
            </Box>

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Un sandwich à la rosette, miam miam.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" style={{ color: "#4e5166", borderRadius: "15px", backgroundColor: "#ffd7d7", height: "50px" }}>
                    Partager
                </Button>
                <Button size="small" style={{ color: "#4e5166", borderRadius: "15px", backgroundColor: "#ffd7d7", height: "50px" }}>
                    Commenter
                </Button>
            </CardActions>
        </Card>
    );
}
