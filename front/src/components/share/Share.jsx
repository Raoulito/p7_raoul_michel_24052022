import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import IosShareIcon from "@mui/icons-material/IosShare";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import axios from "axios";
import { useState } from "react";
import { Web3Storage } from "web3.storage";

const StyledTextField = styled(TextField)({
    backgroundColor: "#fff",
    fontWeight: "bold",
    borderRadius: "15px",
    width: "90%",
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },
    "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
        },
    },
});

const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDAzZjZjMWZDZDQwQTkxYzRiYTIzZjg4ODI4RDc3YUJmNjg3RTIzY2UiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTU5NjU0NTkzOTMsIm5hbWUiOiJncm91cG8ifQ.eBcxFoBMnhDdHbe8AQg2ALpXLGtIJcbgFhOM2Dkhc_w";
const client = new Web3Storage({ token: apiToken });

export default function Share() {
    const [file, setFile] = useState("");
    const handleUpload = async () => {
        console.log(document.getElementById("input").files[0]);
        var fileInput = document.getElementById("input");

        const rootCid = await client.put(fileInput.files, {
            name: "",
            maxRetries: 3,
        });

        console.log(rootCid);

        const res = await client.get(rootCid);
        const files = await res.files();
        console.log(files);
        const url = URL.createObjectURL(files[0]);
        console.log(url);
        setFile(url);
    };

    const createPost = async (post) => {
        try {
            const res = await axios.post("http://localhost:27017/api/posts", {
                userId: localStorage.getItem("isLogged"),
                desc: document.getElementById("desc").value,
                //img: `https://dweb.link/ipfs/${rootCid}`,
            });
            console.log(res);
        } catch (err) {
            console.log(err);
        } finally {
            window.location.reload();
        }
    };

    return (
        <>
            <Card sx={{ maxWidth: "100%", backgroundColor: "lightgrey", display: "flex", borderRadius: "15px" }}>
                <StyledTextField type="text" id="desc" sx={{ display: "flex", height: "50px", width: "100%", margin: "10px" }} placeholder="Quoi de neuf ?" />

                <CardActions>
                    <>
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" name="file" style={{ display: "none" }} />
                            <Button size="small" style={{ color: "#4e5166", borderRadius: "15px", backgroundColor: "#ffd7d7", height: "50px", marginRight: "10px" }} aria-label="upload picture" component="span" onClick={handleUpload}>
                                <AddPhotoAlternateIcon />
                            </Button>
                        </label>
                    </>
                    <Button size="small" style={{ color: "#4e5166", borderRadius: "15px", backgroundColor: "#ffd7d7", height: "50px" }} onClick={createPost}>
                        <IosShareIcon />
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}
