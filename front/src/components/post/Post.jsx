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
import CommentIcon from "@mui/icons-material/Comment";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';
import fr from 'timeago.js/lib/lang/fr';
timeago.register('fr', fr);


export default function Post({ post }) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`http://localhost:27017/api/users/${post.userId}`);
            setUser(res.data);

        };
        fetchUser();
    }, [post.userId]);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    return (
        <Card sx={{ maxWidth: "100%", mt: "10px", backgroundColor: "lightgrey", borderRadius: "15px" }}>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Link to={`/profile/${user._id}`}>
                <Avatar sx={{ m: "5px" }} src={user.profilePicture} />
                </Link>
                {user.username}, <TimeAgo datetime={post.createdAt} locale='fr' />.
            </Box>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post?.desc}
                </Typography>
            </CardContent>
          
            {post.img && (
                <Box sx={{ px: "15px" }}>
                    <CardMedia sx={{ width: "100%", borderRadius: "15px" }} component="img" alt="" height="240" src={post.img} />
                </Box>
            )}

            <Box sx={{ px: "15px", display: "flex", justifyContent: "flex-start", my: "10px" }}>
                <CardMedia sx={{ mr: "15px", width: "25px", borderRadius: "50%", cursor: "pointer" }} component="img" alt="Like" height="25" src="http://localhost:27017/images/assets/reactions/like.png" onClick={likeHandler} />
                <CardMedia sx={{ mr: "15px", width: "25px", borderRadius: "50%", cursor: "pointer" }} component="img" alt="Love" height="25" src="http://localhost:27017/images/assets/reactions/heart.png" onClick={likeHandler} />
                {like} personne(s) aime(nt) ça.
            </Box>
            <CardContent>
                {post.comment && (
                <Typography variant="body2" color="text.secondary">
                    {post.comment} commentaire(s).
                </Typography>
                )}
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
