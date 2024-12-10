import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/Post_list_store";
import Welcomemessage from "./Welcomemessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setfetching] = useState(false);

  useEffect(() => {
    setfetching(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.products);
        setfetching(false);
      });
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <Welcomemessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
