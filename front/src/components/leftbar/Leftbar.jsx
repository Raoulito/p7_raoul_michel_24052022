import "./leftbar.css";
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import MessageIcon from '@mui/icons-material/Message';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SchoolIcon from '@mui/icons-material/School';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function Leftbar () {
    return (
        <div className="leftbar">
            Leftbar
            <div className="leftbarWrapper">
                <ul className="leftbarList">
                <li className="leftbarListItem">
                    <DynamicFeedIcon className="leftbarIcon"/>
                    <span className="leftbarListItemText">Fil d'actualités</span>
                </li>
                <li className="leftbarListItem">
                    <MessageIcon className="leftbarIcon"/>
                    <span className="leftbarListItemText">Messagerie</span>
                </li>
                <li className="leftbarListItem">
                    <OndemandVideoIcon className="leftbarIcon"/>
                    <span className="leftbarListItemText">Vidéos</span>
                </li>
                <li className="leftbarListItem">
                    <GroupIcon className="leftbarIcon"/>
                    <span className="leftbarListItemText">Vos groupes</span>
                </li>
                <li className="leftbarListItem">
                    <SchoolIcon className="leftbarIcon"/>
                    <span className="leftbarListItemText">Formations</span>
                </li>
                <li className="leftbarListItem">
                    <BeachAccessIcon className="leftbarIcon"/>
                    <span className="leftbarListItemText">Comité d'Entreprise</span>
                </li>
                <li className="leftbarListItem">
                    <HelpOutlineIcon className="leftbarIcon"/>
                    <span className="leftbarListItemText">FÀQ</span>
                </li>
                </ul>
                <button className="leftbarButton">En voir plus...</button>
                <hr className="leftbarHr"/>
                <ul className="leftbarFriendList">
                    <li className="leftbarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="leftbarFriendImg" />
                        <span className="leftbarFriendName">Bibi </span>
                        </li> 

                </ul>
            </div>
        </div>
    )
}