import "./leftbar.css";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import MessageIcon from "@mui/icons-material/Message";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GroupIcon from "@mui/icons-material/Group";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SchoolIcon from "@mui/icons-material/School";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

export default function Leftbar() {
    return (
        <div className="leftbar">
            <div className="leftbarWrapper">
                <ul className="leftbarList">
                    <li className="leftbarListItem">
                        <DynamicFeedIcon className="leftbarIcon" />
                        <span className="leftbarListItemText">Fil d'actualités</span>
                    </li>
                    <li className="leftbarListItem">
                        <MessageIcon className="leftbarIcon" />
                        <span className="leftbarListItemText">Messagerie</span>
                    </li>
                    <li className="leftbarListItem">
                        <OndemandVideoIcon className="leftbarIcon" />
                        <span className="leftbarListItemText">Vidéos</span>
                    </li>
                    <li className="leftbarListItem">
                        <GroupIcon className="leftbarIcon" />
                        <span className="leftbarListItemText">Vos groupes</span>
                    </li>
                    <li className="leftbarListItem">
                        <SchoolIcon className="leftbarIcon" />
                        <span className="leftbarListItemText">Formations</span>
                    </li>
                    <li className="leftbarListItem">
                        <BeachAccessIcon className="leftbarIcon" />
                        <span className="leftbarListItemText">Comité d'Entreprise</span>
                    </li>
                    <li className="leftbarListItem">
                        <HelpOutlineIcon className="leftbarIcon" />
                        <span className="leftbarListItemText">Foire aux Questions</span>
                    </li>
                </ul>
                <button className="leftbarButton">En voir plus...</button>
                <hr className="leftbarHr" />
                <ul className="leftbarFriendList">
                    <li className="leftbarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="leftbarFriendImg" />
                        <span className="leftbarFriendName">Big Boss - CEO</span>
                    </li>
                    <li className="leftbarFriend">
                        <img src="/assets/person/5.jpeg" alt="" className="leftbarFriendImg" />
                        <span className="leftbarFriendName">Gertrude - Comptable</span>
                    </li>
                    <li className="leftbarFriend">
                        <img src="/assets/person/4.jpeg" alt="" className="leftbarFriendImg" />
                        <span className="leftbarFriendName">Stagiaire - Photocopies</span>
                    </li>
                    <li className="leftbarFriend">
                        <img src="/assets/person/6.jpeg" alt="" className="leftbarFriendImg" />
                        <span className="leftbarFriendName">Stagiaire - Photocopies</span>
                    </li>
                    <li className="leftbarFriend">
                        <img src="/assets/person/3.jpeg" alt="" className="leftbarFriendImg" />
                        <span className="leftbarFriendName">Stagiaire - Photocopies</span>
                    </li>
                    <li className="leftbarFriend">
                        <img src="/assets/person/7.jpeg" alt="" className="leftbarFriendImg" />
                        <span className="leftbarFriendName">Stagiaire - Photocopies</span>
                    </li>
                    <li className="leftbarFriend">
                        <img src="/assets/person/8.jpeg" alt="" className="leftbarFriendImg" />
                        <span className="leftbarFriendName">Stagiaire - Photocopies</span>
                    </li>
                    <li className="leftbarFriend">
                        <img src="/assets/person/9.jpeg" alt="" className="leftbarFriendImg" />
                        <span className="leftbarFriendName">Stagiaire - Photocopies</span>
                    </li>
                    <li className="leftbarFriend">
                        <img src="/assets/person/10.jpeg" alt="" className="leftbarFriendImg" />
                        <span className="leftbarFriendName">Stagiaire - Photocopies</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
