import React, {useContext} from 'react';
import {PostContext} from "./index";

const PostList = () => {

    const {postArr, removePost} = useContext(PostContext)

    const list = postArr.map(post =>
        <li key={post.id}>{post.title}--{post.author}<button onClick={() =>removePost(post.id)}>DEL</button></li>)

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