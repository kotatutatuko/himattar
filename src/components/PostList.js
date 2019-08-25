import React from "react";
import PostCard from "./PostCard";

const PostList = () => {
  const tmpArray = ["Testuser", "テスト用投稿", "テスト投稿です"];
  return (
    <div>
      <PostCard value={tmpArray} />
    </div>
  );
};

export default PostList;
