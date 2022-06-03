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
import Like from "../../assets/like.png";
import Heart from "../../assets/heart.png";
import { Users } from "../../dummyData";

export default function Post({ post }) {
    console.log(post);

    return (
        <Card sx={{ maxWidth: "100%", mt: "10px", backgroundColor: "lightgrey", borderRadius: "15px" }}>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>


                {/* A FIX */} <Avatar sx={{ m: "5px" }} src={Users.filter((u) => u.id === post.userId)[0].profilePicture} />


                {Users.filter((u) => u.id === post.userId)[0].username}, {post.date}
            </Box>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post?.desc}
                </Typography>
            </CardContent>
            <Box sx={{ px: "20px" }}>


                {/* A FIX */} <CardMedia sx={{ width: "100%", borderRadius: "15px" }} component="img" alt="" height="240" src={post.photo} />

                
            </Box>
            <Box sx={{ px: "15px", display: "flex", justifyContent: "flex-start", my: "10px" }}>
                <CardMedia sx={{ mr: "15px", width: "25px", borderRadius: "50%" }} component="img" alt="Like" height="25" image={Like} />
                <CardMedia sx={{ mr: "15px", width: "25px", borderRadius: "50%" }} component="img" alt="Love" height="25" image={Heart} />
                {post.like} personne(s) aime(nt) ça.
            </Box>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post.comment} commentaires.
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
