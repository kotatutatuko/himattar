import React from "react";
import PostCard from "./PostCard";

const PostList = () => {
  const tmpArray = [
    "Testuser",
    "2019年8月30日",
    "テスト用投稿",
    "テスト投稿ですあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ"
  ];
  return (
    <div>
      <PostCard value={tmpArray} />
    </div>
  );
};

export default PostList;
