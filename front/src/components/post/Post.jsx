import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Input from "@mui/material/Input";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Web3Storage } from "web3.storage";
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
    const [desc, setDesc] = useState(post.desc);
    const [file, setFile] = useState(post.img);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
            let res = await axios.delete(`http://localhost:27017/api/posts/${post._id}`, {
                data: {
                    userId: localStorage.getItem("isLogged"),
                    isAdmin: localStorage.getItem("isAdmin"),
                },
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        } finally {
            window.location.reload();
        }
    };

    const apiToken = process.env.REACT_APP_WEB3_STORAGE_API_TOKEN;
    const client = new Web3Storage({ token: apiToken });
    const updatePost = async () => {
        let fileInput = document.getElementById("input");
        if (fileInput === null || fileInput.files === null || fileInput.files.length === 0) {
            try {
                let res = await axios.put(`http://localhost:27017/api/posts/${post._id}`, {
                    userId: localStorage.getItem("isLogged"),
                    desc: desc,
                    img: file,
                });
                console.log(res);
            } catch (err) {
                console.log(err);
            } finally {
                window.location.reload();
            }
        } else {
            const rootCid = await client.put(fileInput.files, {
                name: "",
                maxRetries: 3,
            });
            const res = await client.get(rootCid);
            const files = await res.files();
            const url = URL.createObjectURL(files[0]);
            setFile(url);

            try {
                let res = await axios.put(`http://localhost:27017/api/posts/${post._id}`, {
                    userId: localStorage.getItem("isLogged"),
                    isAdmin: localStorage.getItem("isAdmin"),
                    desc: desc,
                    img: "https://" + rootCid + ".ipfs.dweb.link/" + files[0].name,
                });
                console.log(res);
            } catch (error) {
                console.log(error);
            } finally {
                window.location.reload();
            }
        }
    };

    if (post.userId === localStorage.getItem("isLogged") || localStorage.getItem("isAdmin") === "true") {
        return (
            <Card sx={{ maxWidth: "100%", mt: "10px", backgroundColor: "lightgrey", borderRadius: "15px" }}>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Avatar sx={{ m: "5px" }} src={user.profilePicture} />
                    {user.username}, <TimeAgo datetime={post.createdAt} locale="fr" />.
                    <Box flexGrow={1} />
                    <ButtonGroup disableElevation variant="contained" sx={{ marginRight: "10px" }}>
                        <div>
                            <Button onClick={handleOpen} style={{ color: "#4e5166", marginRight: "15px" }}>
                                <EditIcon />
                            </Button>
                            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "75%", height: "300px", background: "white", borderRadius: "15px" }}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ marginLeft: "10px" }}>
                                        Éditez votre post !
                                    </Typography>
                                    <TextField type="text" id="desc" sx={{ display: "flex", height: "50px", width: "90%", margin: "10px" }} placeholder={post.desc} onChange={(e) => setDesc(e.target.value)} />
                                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ marginLeft: "10px" }}>
                                        Ajoutez une nouvelle image !
                                        <label htmlFor="input">
                                            <Input accept="image/*" id="input" type="file" name="img" style={{ display: "none" }} />
                                            <Button size="small" style={{ color: "#4e5166", borderRadius: "15px", backgroundColor: "#ffd7d7", height: "50px", marginLeft: "10px", marginRight:"10px" }} aria-label="Télécharger une image" component="span" onChange={(e) => setFile(e.target.value)}>
                                                <AddPhotoAlternateIcon />
                                            </Button>
                                        </label> 
                                        ou supprimez là :
                                        <Button size="small" style={{ color: "#4e5166", borderRadius: "15px", backgroundColor: "#ffd7d7", height: "50px", marginLeft: "10px" }} aria-label="Télécharger une image" component="span" onClick={(e) => setFile("")}>
                                        <DeleteIcon />
                                            </Button>
                                    </Typography>
                                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ marginLeft: "10px" }}>
                                        Et validez ici !
                                        <Button onClick={() => updatePost(post._id)} style={{ color: "#4e5166", borderRadius: "15px", backgroundColor: "#ffd7d7", height: "50px", marginLeft: "10px" }}>
                                            <EditIcon />
                                        </Button>
                                    </Typography>
                                </Box>
                            </Modal>
                        </div>
                        <Button onClick={() => deletePost(post._id)} style={{ color: "#4e5166" }}>
                            <DeleteIcon />
                        </Button>
                    </ButtonGroup>
                </Box>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {post?.desc}
                    </Typography>
                </CardContent>

                {post.img && (
                    <Box sx={{ px: "15px" }}>
                        <CardMedia sx={{ width: "100%", borderRadius: "15px" }} component="img" alt="" height="" src={(URL.srcObject = post.img)} />
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
                        <CardMedia sx={{ width: "100%", borderRadius: "15px" }} component="img" alt="" height="" src={(URL.srcObject = post.img)} />
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
