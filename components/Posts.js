import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllPosts, selectPosts } from "../src/features/postsSlice";
import Post from "./Post";

const Posts = () => {
  const FACEBOOK_URL = "http://localhost:8080/api/post";
  const dispatcher = useDispatch();
  const posts = useSelector(selectPosts);
  useEffect(() => {
    const fetchData = () => {
      const response = axios.get(FACEBOOK_URL)
          .then(response => {
            dispatcher(addAllPosts(response.data));
          })
    };
    fetchData();
  }, []);
  return (
      <div>
        { posts && posts.map(post => <Post key={post.id} post={post}/>)}
      </div>
  );
};

export default Posts;
