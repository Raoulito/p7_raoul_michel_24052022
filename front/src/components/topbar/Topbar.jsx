import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
    return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <img src="/assets/logos/icon-left-font-monochrome-black.png" alt="Logo Groupomania" className="logo"/>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <SearchIcon className="searchIcon"/>
                <input placeholder="Que recherchez-vous ?" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
            <span className="topbarLink">Accueil</span>
            <span className="topbarLink">Fil d'actualités</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                <PersonIcon/>
                <span className="topbarIconBadge">1</span>

                </div>
                <div className="topbarIconItem">
                <ChatIcon/>
                <span className="topbarIconBadge">2</span>

                </div>
                <div className="topbarIconItem">
                <NotificationsIcon/>
                <span className="topbarIconBadge">3</span>

                </div>
            </div>
            <img src="/assets/person/1.jpeg" alt="Photo de profil" className="topbarImg" />
        </div>
        </div>
    )
}
