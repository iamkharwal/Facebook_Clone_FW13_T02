import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useState, useEffect } from "react";
import axios from "axios";
import StoryReel from "../story/StoryReel";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/62154288a72feb8aabaa5232");
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <StoryReel />
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
