import Post from "../post/Post";
import Share from "../share/Share";
import { useEffect, useState } from "react";
import axios from "axios";

<<<<<<< HEAD
export default function Feed({ id }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = id 
            ? await axios.get(`http://localhost:27017/api/posts/profile/${id}`) 
=======
export default function Feed({userId}) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = userId 
            ? await axios.get(`http://localhost:27017/api/posts/${userId}`)
>>>>>>> parent of e8cb2d3 (Added some conditional rendering on profile + few other minor fixes)
            : await axios.get("http://localhost:27017/api/posts/timeline/62a077f93714d9ab83a32701");
            setPosts(res.data);
        };
        fetchPosts();
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
