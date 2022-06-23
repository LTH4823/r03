import React, {useContext} from 'react';
import {PostContext} from "./index";

const PostList = () => {

    const {postArr} = useContext(PostContext)

    const list = postArr.map(post =>
        <li key={post.id}>{post.title}--{post.author}</li>)

    return (
        <div>
            <h2>Post List</h2>
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default PostList;