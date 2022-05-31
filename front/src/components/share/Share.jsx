import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

export default function Share() {
  return (
    <div>
        <div className="shareContainer">
      SHARE
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfilePicture" src="/assets/person/1.jpeg" alt="" />
                    <input placeholder="Quoi de neuf Raoul ?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                    <div className="shareOption">
                            <PermMediaIcon className="shareIcon" htmlColor="#04c86a" />
                            <span className="shareOptionText" >Photo / Vidéo</span>
                        </div>
                        <div className="shareOption">
                            <LocalOfferIcon className="shareIcon" htmlColor="#3561ee"/>
                            <span className="shareOptionText" >Identifier des amis</span>
                        </div>
                        <div className="shareOption">
                            <LocationOnIcon className="shareIcon" htmlColor="#FD2D01" />
                            <span className="shareOptionText" >Ajouter un lieu</span>
                        </div>
                        <div className="shareOption">
                            <SentimentSatisfiedAltIcon className="shareIcon" htmlColor="#f8bd3c" />
                            <span className="shareOptionText" >Humeur</span>
                        </div>
                    </div>
                    <button className="shareButton">Publier</button>
                </div>
            </div>
        </div>
    </div>
  )
}
