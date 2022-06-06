import StyledBadge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";


export default function Online({ user }) {
    return (
        <>

            <List sx={{ backgroundColor: "#ffd7d7", color: "#4e5166", padding:"0" }}>
                
                    <ListItem disablePadding>
                        <ListItemButton>
                            <StyledBadge overlap="circular" anchorOrigin={{ vertical: "top", horizontal: "right" }} variant="dot">
                                <Avatar alt={user.username} src={user.profilePicture} />
                            </StyledBadge>
                                <ListItemText primary={user.username} sx={{ pl: "10px", color:"4e5166" }} />
                        </ListItemButton>
                    </ListItem>
            </List>
        </>
    );
}
