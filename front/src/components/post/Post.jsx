import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState, useEffect } from "react";
import axios from "axios";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import fr from "timeago.js/lib/lang/fr";
timeago.register("fr", fr);

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

    const deletePost = async () => {
        try {
            let res = await axios.delete(`http://localhost:27017/api/posts/${post._id}`,             
            {
                data: {
                userId: localStorage.getItem("isLogged"),
                isAdmin: localStorage.getItem("isAdmin"),
                }
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        } finally {
            window.location.reload();
        }
    };




    if (post.userId === localStorage.getItem("isLogged") || localStorage.getItem("isAdmin") === "true") {
        return (
            <Card sx={{ maxWidth: "100%", mt: "10px", backgroundColor: "lightgrey", borderRadius: "15px" }}>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Avatar sx={{ m: "5px" }} src={user.profilePicture} />
                    {user.username}, <TimeAgo datetime={post.createdAt} locale="fr" />.
                    <Box flexGrow={1} />
                    <ButtonGroup disableElevation variant="contained" sx={{ marginRight: "15px" }}>
                        <Button>Éditer</Button>
                        <Button onClick={() => deletePost(post._id)}>Supprimer</Button>
                    </ButtonGroup>
                </Box>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {post?.desc}
                    </Typography>
                </CardContent>

                {post.img && (
                    <Box sx={{ px: "15px" }}>
                        <CardMedia sx={{ width: "100%", borderRadius: "15px" }} component="img" alt="" height="240" src={(URL.srcObject = post.img)} />
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
            </Card>
        );
    } else {
        return (
            <Card sx={{ maxWidth: "100%", mt: "10px", backgroundColor: "lightgrey", borderRadius: "15px" }}>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Avatar sx={{ m: "5px" }} src={user.profilePicture} />
                    {user.username}, <TimeAgo datetime={post.createdAt} locale="fr" />.
                    <Box flexGrow={1} />
                </Box>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {post?.desc}
                    </Typography>
                </CardContent>

                {post.img && (
                    <Box sx={{ px: "15px" }}>
                        <CardMedia sx={{ width: "100%", borderRadius: "15px" }} component="img" alt="" height="240" src={(URL.srcObject = post.img)} />
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
            </Card>
        );
    }
}
