import Post from "../post/Post";
import Share from "../share/Share";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:27017/api/posts").then(res => setPosts(res.data.posts));
    }, []);

    return (
        <div>
            <Share />
            {posts.reverse().map((p) => (
                <Post key={p._id} post={p} />
            ))}
        </div>
    );
}
