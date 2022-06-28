import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import IosShareIcon from "@mui/icons-material/IosShare";
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

const apiToken = process.env.REACT_APP_WEB3_STORAGE_API_TOKEN;
const client = new Web3Storage({ token: apiToken });

export default function Share() {
    const [img, setImg] = useState("");
    const [desc, setDesc] = useState("");
    const handleUpload = async () => {
        let fileInput = document.getElementById("input");
        const rootCid = await client.put(fileInput.files, {
            name: "",
            maxRetries: 3,
        });
        console.log(img)
        const res = await client.get(rootCid);
        const files = await res.files();
        const url = URL.createObjectURL(files[0]);
        setImg(url);

        try {
            
            let res = await axios.post("http://localhost:27017/api/posts", {
                userId: localStorage.getItem("isLogged"),
                desc: desc,
                img:"https://" + rootCid + ".ipfs.dweb.link/" + files[0].name,
            });
            console.log(res)
        } catch (err) {
            console.log(err);
        } finally {
            window.location.reload();
        }
    };

    return (
        <>
            <Card sx={{ maxWidth: "100%", backgroundColor: "lightgrey", display: "flex", borderRadius: "15px" }}>
                <StyledTextField type="text" id="desc" sx={{ display: "flex", height: "50px", width: "100%", margin: "10px" }} placeholder="Quoi de neuf ?" onChange={(e) => setDesc(e.target.value)} />

                <CardActions>
                    <>
                        <label htmlFor="input">
                            <Input accept="image/*" id="input" type="file" name="img" style={{ display: "none" }} />
                            <Button size="small" style={{ color: "#4e5166", borderRadius: "15px", backgroundColor: "#ffd7d7", height: "50px", marginRight: "10px" }} aria-label="Télécharger une image" component="span" onChange={(e) => setImg(e.target.value)}>
                                <AddPhotoAlternateIcon />
                            </Button>
                        </label>
                    </>
                    <Button size="small" style={{ color: "#4e5166", borderRadius: "15px", backgroundColor: "#ffd7d7", height: "50px" }} onClick={handleUpload}>
                        <IosShareIcon />
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}
