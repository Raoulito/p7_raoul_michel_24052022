import "./post.css";

export default function Post() {
    return (
        <div className="postContainer">
            <div className="postWrapper">
                PREVIOUS POSTS
                <div className="postTop">
                    image profil, options...
                    <div className="postTopleft">topleft</div>
                    <div className="posttopright">topright</div>
                </div>
                <div className="postCenter">image ou texte</div>
                <div className="postBottom">réactions</div>
            </div>
        </div>
    );
}
