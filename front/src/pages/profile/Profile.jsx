import React from "react";
import Feed from "../../components/feed/Feed";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

export default function Profile() {
    //   const [expanded, setExpanded] = React.useState(false);

    // const handleExpandClick = () => {
    //   setExpanded(!expanded);
    // };
    return (
        <>
            <Card sx={{ maxWidth: "100%", backgroundColor: "lightgrey", borderRadius: "15px", display: "flex", flexDirection: "column" }}>
                <CardMedia component="img" height="280" src="" alt="Photo de couverture" sx={{ borderRadius: "15px" }} />
                <CardContent sx={{ display: "flex", pl: "50px" }}>
                    <Avatar alt="Photo de profil" src="" sx={{ width: 180, height: 180, zIndex: "1", mt: "-200px" }} />
                </CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold", fontSize: "2.5em", mt: "-40px", pl: "100px" }}>
                    Username
                </Typography>
                <Typography variant="h5" component="div" sx={{ fontWeight: "300", ml: "40px" }}>
                    Bio
                </Typography>
            </Card>

            <Card sx={{ minWidth: 275, borderRadius: "15px", my: "10px", display: "flex", flexDirection: "row" }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        De Le Puy-en-Velay
                    </Typography>
                    <Typography variant="h5" component="div">
                        Habite à Tirana
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Né le 28/04/1981, 41 ans.
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        En couple.
                    </Typography>
                    <Typography variant="body2">10 ami((e)s), 5 en ligne.</Typography>
                    <Typography variant="body2">14 abonnement(s).</Typography>
                </CardContent>

                <Box flexGrow={1} />
            </Card>
            <Feed />
        </>
    );
}
