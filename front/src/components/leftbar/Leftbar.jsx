import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../../assets/logos/icon-left-font-monochrome-black.png";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Topbar from "../topbar/Topbar";
import SchoolIcon from "@mui/icons-material/School";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Avatar from "@mui/material/Avatar";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import MessageIcon from "@mui/icons-material/Message";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GroupsIcon from "@mui/icons-material/Groups";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import { GroupoManiaRoutes } from "../../router/routes";


const drawerWidth = 240;

function Leftbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const menuLeftUp = [
        {
            name: "Fil d'actualités",
            icon: <DynamicFeedIcon />,
        },
        {
            name: "Messagerie",
            icon: <MessageIcon />,
        },
        {
            name: "Vidéos",
            icon: <OndemandVideoIcon />,
        },
        {
            name: "Vos groupes",
            icon: <GroupsIcon />,
        },
        {
            name: "Formations",
            icon: <SchoolIcon />,
        },
        {
            name: "Comité d'entreprise",
            icon: <BeachAccessIcon />,
        },
        {
            name: "Foire aux questions",
            icon: <HelpOutlineIcon />,
        },
    ];

    const menuLeftDown = [
        {
            name: "Bob",
            photoProfil: "../../assets/person/2.jpeg",
        },
        {
            name: "Alice",
            photoProfil: "../../assets/person/3.jpeg",
        },
        {
            name: "Carl",
            photoProfil: "../../assets/person/4.jpeg",
        },
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar >
            <Box display="flex">
                <img src={Logo} width="200px" />
            </Box>
            </Toolbar>
            <Divider />
            <List>
                {menuLeftUp.map((entry, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{entry.icon}</ListItemIcon>
                            <ListItemText primary={entry.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {menuLeftDown.map((entry, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <Avatar alt={entry.name} src={entry.photoProfil} />
                            <ListItemText primary={entry.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Topbar />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="persistent"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <GroupoManiaRoutes />
      </Box>
    </Box>
  );
}

export default Leftbar;
