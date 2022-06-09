import Post from "../post/Post";
import Share from "../share/Share";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:27017/api/posts/timeline/62a077f93714d9ab83a32701");
            setPosts(res.data);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <Share />
            {posts.map((p) => (
                <Post key={p.id} post={p} />
            ))}
        </div>
    );
}
