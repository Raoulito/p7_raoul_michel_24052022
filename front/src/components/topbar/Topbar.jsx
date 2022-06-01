import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import PhotoProfil from "../../assets/person/1.jpeg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import styled from "@emotion/styled";

const settings = ["Profil", "Mon compte", "Déconnexion"];

const Topbar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const StyledTextField = styled(TextField)({
		backgroundColor: "#fff",
		borderRadius: "15px",
		width: "35%",
		"& .MuiOutlinedInput-notchedOutline": {
			border: "none",
		},
		"&.Mui-focused": {
			"& .MuiOutlinedInput-notchedOutline": {
				border: "none",
			},
		},
	});

	return (
		<Container maxWidth="xl">
			<Toolbar disableGutters sx={{ backgroundColor: "primary" }}>
				<Box flexGrow={1} />
				<StyledTextField
					sx={{ display: "flex" }}
					placeholder="Que recherchez-vous ?"
					InputProps={{
						"aria-label": "search",
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						),
					}}
				/>

				<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleOpenNavMenu}
						color="secondary"
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorElNav}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "right",
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}
						sx={{
							display: { xs: "block", md: "none" },
						}}
					></Menu>
				</Box>

				<Box sx={{ flexGrow: 1 }} />

				<MenuItem>
					<IconButton
						size="large"
						aria-label="Vous avez 4 messages"
						color="inherit"
					>
						<Badge badgeContent={4} color="error">
							<MessageIcon />
						</Badge>
					</IconButton>
				</MenuItem>
				<MenuItem>
					<IconButton
						size="large"
						aria-label="Vous avez 17 notifications"
						color="inherit"
						sx={{ pr: 2 }}
					>
						<Badge badgeContent={17} color="error">
							<NotificationsIcon />
						</Badge>
					</IconButton>
				</MenuItem>

				<Box sx={{ flexGrow: 0 }}>
					<Tooltip title="Voir le menu">
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar alt="Raoul MICHEL" src={PhotoProfil} />
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
							<MenuItem key={setting} onClick={handleCloseUserMenu}>
								<Typography textAlign="center">{setting}</Typography>
							</MenuItem>
						))}
					</Menu>
				</Box>
			</Toolbar>
		</Container>
	);
};

export default Topbar;
