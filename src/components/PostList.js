import React from "react";
import PostCard from "./PostCard"

const PostList = () => {
    const tmpArray = [1, 2, 3];
    return (
        <React.Fragment>
            {tmpArray.map((value, index) => {
                return (
                    <PostCard value={value} key={index}/>
                )
            })}
        </React.Fragment>
    )
}

export default PostList;
