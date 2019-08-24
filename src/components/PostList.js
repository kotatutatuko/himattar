import React from "react";
import PostCard from "./PostCard"

const PostList = () => {
    const tmpArray = [1, 2, 3];
    return (
        <div>
            {tmpArray.map((value, index) => {
                return (
                    <PostCard value={value} key={index}/>
                )
            })}
        </div>
    )
}

export default PostList;
