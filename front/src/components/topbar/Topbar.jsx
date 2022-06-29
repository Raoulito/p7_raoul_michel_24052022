import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const settings = [
    {
        label: "Déconnexion",
        to: "/logout",
    },
];

const Topbar = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // const StyledTextField = styled(TextField)({
    //     backgroundColor: "#fff",
    //     borderRadius: "15px",
    //     width: "35%",
    //     "& .MuiOutlinedInput-notchedOutline": {
    //         border: "none",
    //     },
    //     "&.Mui-focused": {
    //         "& .MuiOutlinedInput-notchedOutline": {
    //             border: "none",
    //         },
    //     },
    // });

    return (
        <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ backgroundColor: "primary" }}>
                <Box flexGrow={1} />
                {/* <StyledTextField
                    sx={{ display: "flex", height: "45px", justifyContent: "center", width: "100%", margin: "10px" }}
                    placeholder="Que recherchez-vous ?"
                    InputProps={{
                        "aria-label": "search",
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                /> */}

                <Box sx={{ flexGrow: 1 }} />

                {/* <MenuItem>
                    <IconButton size="large" aria-label="Vous avez 4 messages" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <MessageIcon />
                        </Badge>
                    </IconButton>
                </MenuItem>
                <MenuItem>
                    <IconButton size="large" aria-label="Vous avez 17 notifications" color="inherit" sx={{ pr: 2 }}>
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </MenuItem> */}

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Voir le menu">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="" src="" />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <Link key={setting.to} to={setting.to} style={{ textDecoration: "none", color: "#4e5166" }}>
                                <Typography textAlign="center">
                                    <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                                        {setting.label}
                                    </MenuItem>
                                </Typography>
                            </Link>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </Container>
    );
};

export default Topbar;
