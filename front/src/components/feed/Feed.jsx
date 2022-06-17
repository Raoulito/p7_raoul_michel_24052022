import Post from "../post/Post";
import Share from "../share/Share";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed({ id }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = id 
            ? await axios.get(`http://localhost:27017/api/posts/profile/${id}`) 
            : await axios.get("http://localhost:27017/api/posts/timeline/62a077f93714d9ab83a32701");
            setPosts(res.data);
        };
        fetchPosts();
    }, [id]);

    return (
        <div>
            <Share />
            {posts.reverse().map((p) => (
                <Post key={p._id} post={p} />
            ))}
        </div>
    );
}
