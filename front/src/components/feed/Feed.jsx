import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

export default function Feed() {
    return (
        <div className="feed"  sx={{width:"10%"}}>
            <div className="feedWrapper">
                <Share />
                <Post />
            </div>
        </div>
    );
}
