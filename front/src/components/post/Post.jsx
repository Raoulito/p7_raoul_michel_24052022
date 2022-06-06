import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import Like from "../../assets/reactions/like.png";
import Heart from "../../assets/reactions/heart.png";
import CommentIcon from "@mui/icons-material/Comment";
import { useState } from "react";
import { Users } from "../../dummyData";

export default function Post({ post }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    return (
        <Card sx={{ maxWidth: "100%", mt: "10px", backgroundColor: "lightgrey", borderRadius: "15px" }}>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                {/* NEEDS FIX */} <Avatar sx={{ m: "5px" }} src={Users.filter((u) => u.id === post.userId)[0].profilePicture} />
                {Users.filter((u) => u.id === post.userId)[0].username}, {post.date}
            </Box>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post?.desc}
                </Typography>
            </CardContent>
            <Box sx={{ px: "15px" }}>
                {/* NEEDS FIX */} <CardMedia sx={{ width: "100%", borderRadius: "15px" }} component="img" alt="" height="240" src={PF+post.photo} />
            </Box>
            <Box sx={{ px: "15px", display: "flex", justifyContent: "flex-start", my: "10px" }}>
                <CardMedia sx={{ mr: "15px", width: "25px", borderRadius: "50%", cursor: "pointer" }} component="img" alt="Like" height="25" image={Like} onClick={likeHandler} />
                <CardMedia sx={{ mr: "15px", width: "25px", borderRadius: "50%", cursor: "pointer" }} component="img" alt="Love" height="25" image={Heart} onClick={likeHandler} />
                {like} personne(s) aime(nt) ça.
            </Box>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post.comment} commentaire(s).
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" style={{ color: "#4e5166", borderRadius: "15px", backgroundColor: "#ffd7d7", height: "50px", alt: "Partager" }}>
                    <ShareIcon />
                </Button>
                <Button size="small" style={{ color: "#4e5166", borderRadius: "15px", backgroundColor: "#ffd7d7", height: "50px" }}>
                    <CommentIcon />
                </Button>
            </CardActions>
        </Card>
    );
}
