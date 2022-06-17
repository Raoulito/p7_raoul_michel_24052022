import React from "react";
import Feed from "../../components/feed/Feed";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile({ id }) {
    const [user, setUser] = useState({});
    const params = useParams();
    console.log(params);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`http://localhost:27017/api/users/62a05e663714d9ab83a326ec`);
            setUser(res.data);
        };
        fetchUser();
    }, []);

    return (
        <>
            <Card sx={{ maxWidth: "100%", backgroundColor: "lightgrey", borderRadius: "15px", display: "flex", flexDirection: "column" }}>
                <CardMedia component="img" height="280" src={user.coverPicture || "http://localhost:27017/images/assets/logos/icon-left-font.png"} alt="Photo de couverture" sx={{ borderRadius: "15px" }} />
                <CardContent sx={{ display: "flex", pl: "50px" }}>
                    <Avatar alt="Photo de profil" src={user.profilePicture} sx={{ width: 180, height: 180, zIndex: "1", mt: "-200px" }} />
                </CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold", fontSize: "2.5em", mt: "-40px", pl: "100px" }}>
                    {user.username}
                </Typography>
                <Typography variant="h5" component="div" sx={{ fontWeight: "300", ml: "40px" }}>
                    {user.desc}
                </Typography>
            </Card>

            <Card sx={{ minWidth: 275, borderRadius: "15px", my: "10px", display: "flex", flexDirection: "row" }}>
                <CardContent>
                    {user.from && (
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            De {user.from}
                        </Typography>
                    )}
                    {user.city && (
                        <Typography variant="h5" component="div">
                            Habite à {user.city}
                        </Typography>
                    )}
                    {user.dateBirth && (
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Né le {user.dateBirth}.
                        </Typography>
                    )}
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {user.relationship === 1 ? "Célibataire" : user.relationship === 2 ? "En couple" : user.relationship === 3 ? "Je le garde pour moi" : "-"}.
                    </Typography>
                    <Typography variant="body2">{user.followers} ami((e)s).</Typography>
                    <Typography variant="body2">{user.followings} abonnement(s).</Typography>
                </CardContent>

                <Box flexGrow={1} />
            </Card>
            <Feed userId="62a077f93714d9ab83a32701" />
        </>
    );
}
